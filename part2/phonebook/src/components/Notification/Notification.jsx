import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./Notification.css";

const Notification = ({ message }) => {
  const [style, setStyle] = useState("");

  useEffect(() => {
    if (message === null) {
      setStyle("");
    } else {
      const wordsMessage = message.split(" ");
      if (wordsMessage.some((word) => word === "added" || word === "changed")) {
        setStyle("success");
      } else if (
        wordsMessage.some((word) => word === "loaded" || word === "removed")
      ) {
        setStyle("error");
      }
    }
  }, [message]);

  if (message === null) {
    return null;
  }

  return <div className={style}>{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
