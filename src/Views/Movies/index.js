import Cards from "components/Cards";
import React, { useState } from "react";
import { list } from "../list-de-films";

function Index() {
    
    const [inputvalue, setInputvalue] = useState("");
    const handleChange = (event) => {
        setInputvalue(event.target.value);
    };

  return (
    <>
      <div className="bg-[url('https://flying-for-you-data.s3.eu-west-3.amazonaws.com/website-images/bulle-google-avis.webp')] min-h-screen">
        <h1 className="text-center text-4xl">Liste de films</h1>
        <div className="hover:opacity-100 w-[15%] bg-white opacity-80 justify-center item-center text-center m-auto border p-10 border-solid border-4 rounded-lg">
        <form className="flex flex-col">
          <input
            className="border text-center rounded-lg bg-teal-200"
            type="text"
            placeholder="Recherche par titre"
            name="titre"
            onChange={handleChange}
          />
        </form>
      </div>
        <div className="flex content-center m-auto flex-wrap w-[70%]">
          {list.filter((film) => {
            return film.title?.toLowerCase().includes(inputvalue);
          }).map((film) => (
            <Cards
              key={film.id}
              title={film?.title ? film?.title : "N/C"}
              image={film?.poster_path}
              description={film?.overview ? film?.overview : "N/C"}
              release_date={film?.release_date ? film?.release_date : "N/C"}
              vote_average={film?.vote_average ? film?.vote_average : "N/C"}
              vote_count={film?.vote_count ? film?.vote_count : "N/C"}
              id={film?.id ? film?.id : "N/C"}
            />
          ))}
        </div>
      </div>
    </>
    
  );
}

export default Index;
