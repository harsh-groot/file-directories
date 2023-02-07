import { Store } from "react-notifications-component";

export function Notifications(type, title, message) {
  Store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: "top",
    container: "top-right",
    dismiss: {
      duration: 5000,
      onScreen: true
    }
  })
}

