import notificationsData from "../../../../notifications.json";

export function getAllNotificationsByUser(userid) {
  return notificationsData
    .filter((notif) => notif.author.id === userid)
    .map((notif) => notif.context);
}
