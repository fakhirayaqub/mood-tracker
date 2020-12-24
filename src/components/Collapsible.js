import React from "react";
import { Collapse } from "antd";
import CustomIcons from "./CustomIcons";
import "./Collapsible.css";

import { faAngry, faDizzy, faFlushed, faFrownOpen, faGrinSquint, faGrinSquintTears, faSadTear, faTired } from "@fortawesome/free-solid-svg-icons";

export default function Collapsible() {
  const { Panel } = Collapse;

  return (
    <Collapse className="panel" accordion>
      <Panel header="Anger" key="1">
        <CustomIcons icon={faAngry} />
      </Panel>
      <Panel header="Irritation" key="2">
        <CustomIcons icon={faTired} />
      </Panel>
      <Panel header="Anxiety" key="3">
        <CustomIcons icon={faDizzy} />
      </Panel>
      <Panel header="Hypo" key="4">
        <CustomIcons icon={faGrinSquintTears} />
      </Panel>
      <Panel header="PTSD" key="5">
        <CustomIcons icon={faFrownOpen} />
      </Panel>
      <Panel header="Guilt" key="6">
        <CustomIcons icon={faFlushed} />
      </Panel>
      <Panel header="Crying spells" key="7">
        <CustomIcons icon={faSadTear} />
      </Panel>
    </Collapse>
  );
}
