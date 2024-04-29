import { normalize, schema } from "normalizr";
import notificationsData from "../../../../notifications.json";

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export const normalizedData = normalize(notificationsData, [notification]);

export function getAllNotificationsByUser(userId) {
  return normalizedData.result.reduce((resultArr, notifId) => {
    const currNotification = normalizedData.entities.notifications[notifId];

    if (currNotification.author === userId) {
      resultArr.push(
        normalizedData.entities.messages[currNotification.context]
      );
    }

    return resultArr;
  }, []);
}
