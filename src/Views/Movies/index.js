import Cards from "components/Cards";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function Index() {
    
    const [inputvalue, setInputvalue] = useState("");
    const handleChange = (event) => {
        setInputvalue(event.target.value);
    };
    const movies = useSelector(state => state.movie.movies);
    
  return (
    <>
      <div className="bg-[url('https://flying-for-you-data.s3.eu-west-3.amazonaws.com/website-images/bulle-google-avis.webp')] min-h-screen">
        <h1 className="text-center text-4xl">Liste de movies</h1>
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
          {movies?.filter((movie) => {
            return movie.title?.toLowerCase().includes(inputvalue);
          }).map((movie) => (
            <Cards
              key={movie.id}
              title={movie?.title ? movie?.title : "N/C"}
              image={movie?.poster_path}
              description={movie?.overview ? movie?.overview : "N/C"}
              release_date={movie?.release_date ? movie?.release_date : "N/C"}
              vote_average={movie?.vote_average ? movie?.vote_average : "N/C"}
              vote_count={movie?.vote_count ? movie?.vote_count : "N/C"}
              id={movie?.id ? movie?.id : "N/C"}
              liked={movie?.liked}
            />
          ))}
        </div>
      </div>
    </>
    
  );
}

export default Index;
