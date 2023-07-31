import React from "react";
import Cards from "../components/Cards/Cards";



function Home({allcharacters}) {
  
  console.log("hola soy home",allcharacters);
  return (
    <div className='bg-hero-pattern h-screen '>
      <Cards characters={allcharacters}/>
    </div>
  );
}

export default Home;
