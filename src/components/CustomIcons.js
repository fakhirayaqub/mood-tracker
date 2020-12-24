import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rate } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import "../App.css";

export default function CustomIcons(props) {
  return (
    <div>
      <Rate
        defaultValue={0}
        allowHalf
        character={<FontAwesomeIcon icon={props.icon} />}
        style={{
          color:"#c2b9b0"
        }}
      />
    </div>
  );
}
