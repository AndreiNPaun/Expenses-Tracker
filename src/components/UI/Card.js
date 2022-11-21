import React from "react";

import "./Card.css";

// Makes card classname css available as a reusable component
const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
