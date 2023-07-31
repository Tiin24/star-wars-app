import React from "react";
import Card from "../Card/Card";

function Cards({ characters }) {
  const left = characters.cardLeft;
  const right = characters.cardRight;
  console.log( right);
  return (
    <div className="flex">
      <Card
        imgItem={left.image}
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, omnis. Hic, ad tempore voluptatem sequi quae obcaecati eum facilis deserunt pariatur voluptatibus laborum voluptas excepturi adipisci omnis perferendis quas fuga."
        }
        name={left.name}
      />
      <Card imgItem={right.image} name={right.name}/>
    </div>
  );
}

export default Cards;
