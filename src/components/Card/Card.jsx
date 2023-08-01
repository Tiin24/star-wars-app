function Card({ imgItem, id, name, specie, afiliation, home, shadowClass }) {
  const paragraphsData = [
    { label: "Id", content: id },
    { label: "Specie", content: specie },
    { label: "Afiliation", content: afiliation },
    { label: "Home World", content: home },
  ];

  return (
    <section className="mx-auto w-fit p-12">
      <div className={`w-72 h-96 group ${shadowClass}`}>
        <div className="h-96 relative overflow-hidden">
          <img
            className="h-full w-full object-scale-down"
            src={imgItem}
            alt=""
          />
          <div className="absolute flex flex-col justify-center h-full w-full bg-black/20  -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
            {paragraphsData.map((data) =>
              data.content ? (
                <p
                  className="text-yellow-500 font-custom text-xl text-center"
                  key={data.label}
                >
                  {data.label}: {data.content}
                </p>
              ) : null
            )}
          </div>
        </div>
        <h1 className="text-yellow-500 font-custom text-3xl text-center">
          {name}
        </h1>
      </div>
    </section>
  );
}

export default Card;
