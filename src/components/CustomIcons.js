import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rate } from "antd";

import "../App.css";

export default function CustomIcons(props) {
  return (
    <Rate
      className="fa-icon"
      defaultValue={0}
      character={<FontAwesomeIcon icon={props.icon} />}
      allowHalf
      style={{ color: "crimson" }}
      onChange={(changedValue) => props.setValue(changedValue)}
    />
  );
}
