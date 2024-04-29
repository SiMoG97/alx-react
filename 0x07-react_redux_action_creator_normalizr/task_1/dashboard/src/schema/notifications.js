import { normalize, schema } from "normalizr";
import notificationsData from "../../../../notifications.json";

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export const normalizedData = normalize(notificationsData, [notification]);

export function getAllNotificationsByUser(userid) {
  return notificationsData
    .filter((notif) => notif.author.id === userid)
    .map((notif) => notif.context);
}
