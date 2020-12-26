import React, { useState } from "react";
import { Collapse } from "antd";
import CustomIcons from "./CustomIcons";

import {
  faAngry,
  faDizzy,
  faFlushed,
  faFrownOpen,
  faGrinSquintTears,
  faSadTear,
  faTired,
} from "@fortawesome/free-solid-svg-icons";

export default function Collapsible() {
  const { Panel } = Collapse;
  const [anger, setAnger] = useState(0);
  const [irritation, setIrritation] = useState(0);
  const [anxiety, setAnxiety] = useState(0);
  const [hypo, setHypo] = useState(0);
  const [PTSD, setPTSD] = useState(0);
  const [guilt, setGuilt] = useState(0);
  const [cryingspells, setCryingspells] = useState(0);
  const [color, setColor] = useState("black");

  return (
    <Collapse className="panel" accordion>
      <Panel header="Anger">
        <CustomIcons
          className="custom-icons"
          icon={faAngry}
          setValue={setAnger}
        />
        {anger ? (
          <p>
            {anger < 3
              ? "Well done! You are calmer!"
              : "Relax and Take a Deep Breath!"}
          </p>
        ) : (
          ""
        )}
      </Panel>

      <Panel header="Irritation">
        <CustomIcons icon={faTired} setValue={setIrritation} />
        {irritation ? (
          <p>
            {irritation < 3
              ? "You are doing well :)"
              : "Hey btw, good music helps!"}
          </p>
        ) : (
          ""
        )}
      </Panel>

      <Panel header="Anxiety">
        <CustomIcons icon={faDizzy} setValue={setAnxiety} />
        {anxiety ? (
          <p>
            {anxiety < 3
              ? "I am so happy that You are feeling better."
              : "Am Sorry Honey.How about a short walk in nature?"}
          </p>
        ) : (
          ""
        )}
      </Panel>

      <Panel header="Hypo">
        <CustomIcons icon={faGrinSquintTears} setValue={setHypo} />

        {hypo ? (
          <p>
            {hypo < 3
              ? "oOoOooLaLa, Fantastic mood!"
              : "Talk to someone to keep an eye on symptoms if these get worst."}
          </p>
        ) : (
          ""
        )}
      </Panel>

      <Panel header="PTSD">
        <CustomIcons icon={faFrownOpen} setValue={setPTSD} />

        {PTSD ? (
          <p>
            {PTSD < 3
              ? "It gets better and it will."
              : "Forgiveness & Meditation helps."}
          </p>
        ) : (
          ""
        )}
      </Panel>

      <Panel header="Guilt">
        <CustomIcons icon={faFlushed} setValue={setGuilt} />
        {guilt ? (
          <p>
            {guilt < 3 ? "Its ok, No one is perfect!" : "Be kind to your self!"}
          </p>
        ) : (
          ""
        )}
      </Panel>

      <Panel header="Crying spells">
        <CustomIcons icon={faSadTear} setValue={setCryingspells} />
        {cryingspells ? (
          <p>
            {cryingspells < 3
              ? "Hang in there, it would get better!"
              : "I am Sorry, sending you lots of hugs!!!"}
          </p>
        ) : (
          ""
        )}
      </Panel>
    </Collapse>
  );
}
