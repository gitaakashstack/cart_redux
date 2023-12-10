import { notificationStatus } from "../../App";
import classes from "./Notification.module.css";

const Notification = (props) => {
  let specialClasses = "";

  if (props.status === notificationStatus.error) {
    specialClasses = classes.error;
  }
  if (props.status === notificationStatus.successful) {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{props.status}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
