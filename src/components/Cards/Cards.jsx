import React from "react";
import Card from "../Card/Card";

function Cards({ characters }) {
  const left = characters.cardLeft;
  const right = characters.cardRight;
  return (
    <div className="flex text-center items-center">
      <Card
        imgItem={
          left.image
            ? left.image
            : "https://yt3.googleusercontent.com/ytc/AOPolaT-60EgZMPStubu7XcNrZ9useOeTtyB-_yVsWvsAQ=s900-c-k-c0x00ffffff-no-rj"
        }
        name={left.name}
        id={left.id}
        specie={left.species}
        home={left.homeworld}
        afiliation={left.affiliations ? left.affiliations[0] : ""}
        shadowClass="shadow-custom-shadow-blue"
      />
      <h1 className="font-custom text-8xl text-yellow-500">VS</h1>
      <Card
        imgItem={
          right.image
            ? right.image
            : "https://yt3.googleusercontent.com/ytc/AOPolaT-60EgZMPStubu7XcNrZ9useOeTtyB-_yVsWvsAQ=s900-c-k-c0x00ffffff-no-rj"
        }
        name={right.name}
        id={right.id}
        specie={right.species}
        home={right.homeworld}
        afiliation={right.affiliations ? right.affiliations[0] : ""}
        shadowClass="shadow-custom-shadow-red"
      />
    </div>
  );
}

export default Cards;
