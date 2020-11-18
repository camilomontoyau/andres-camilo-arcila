import React from "react";
import Styles from "./CharacterCard.module.sass";

function CharacterCard({ data: { name, gender, birthYear, height, mass, eyeColor, hairColor, skinColor } }) {
  return (
    <div className={Styles["card--character"]}>
      <div className={`${Styles["information"]} ${Styles["information--main"]}`}>
        <h3 className={Styles["name"]}>{name.toLowerCase() || "n/a"}</h3>
        <p className={Styles["gender"]}>{gender || "n/a"}</p>
      </div>
      <div className={`${Styles["information"]} ${Styles["information--secondary"]}`}>
        <div className={Styles["data--container"]}>
          <p className={Styles["label"]}>Birth year: </p><p className={Styles["data"]}>{birthYear || "n/a"}</p>
        </div>
        <div className={Styles["data--container"]}>
          <p className={Styles["label"]}>Height: </p><p className={Styles["data"]}>{height ? `${height} cm` : "n/a"}</p>
        </div>
        <div className={Styles["data--container"]}>
          <p className={Styles["label"]}>Mass: </p><p className={Styles["data"]}>{mass ? `${mass} Kg` : "n/a"}</p>
        </div>
        <div className={Styles["data--container"]}>
          <p className={Styles["label"]}>Eye color: </p><p className={Styles["data"]}>{eyeColor || "n/a"}</p>
        </div>
        <div className={Styles["data--container"]}>
          <p className={Styles["label"]}>Hair color: </p><p className={Styles["data"]}>{hairColor || "n/a"}</p>
        </div>
        <div className={Styles["data--container"]}>
          <p className={Styles["label"]}>Skin color: </p><p className={Styles["data"]}>{skinColor || "n/a"}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
