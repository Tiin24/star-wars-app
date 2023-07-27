import React from "react";
import Card from "../Card/Card";

function Cards() {
  return (
    <div className="flex">
      <Card
        imgItem={
          "https://images.unsplash.com/photo-1659576294143-1da218a2d82e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        }
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, omnis. Hic, ad tempore voluptatem sequi quae obcaecati eum facilis deserunt pariatur voluptatibus laborum voluptas excepturi adipisci omnis perferendis quas fuga."
        }
      />
      <Card
        imgItem={
          "https://images.unsplash.com/photo-1659576294143-1da218a2d82e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        }
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, omnis. Hic, ad tempore voluptatem sequi quae obcaecati eum facilis deserunt pariatur voluptatibus laborum voluptas excepturi adipisci omnis perferendis quas fuga."
        }
      />
    </div>
  );
}

export default Cards;
