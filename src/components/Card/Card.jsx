import React from "react";

function Card({imgItem, content,name}) {
  return (
    <section className="mx-auto w-fit p-12">
      <div className="w-72 h-full group">
        <div className="relative overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={imgItem}
            alt=""
          />
          <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <p>{content}</p>
          </div>
        </div>
        <p className="">{name}</p>
      </div>
    </section>
  );
}

export default Card;
