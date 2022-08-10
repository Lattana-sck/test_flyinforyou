import Cards from "../../components/Cards";
import { datas } from "../list-de-films";
import React, { useState } from "react";
import Modals from "../../components/Modals";

function index() {
  return (
    <>
    <div className="flex content-center flex-wrap bg-gray-200 h-full">
      {datas.map((data) => (

        <div className="w-1/3 p-2">
          <Cards 
            key={data.id} 
            img={data.backdrop_path} 
            title={data.title}
            />
          <Modals
            key={data.id} 
            img={data.backdrop_path} 
            title={data.title}
            overview={data.overview}
            release_date={data.release_date}
            vote_average={data.vote_average}
            vote_count={data.vote_count}
          />
        </div>
      ))};
    </div>
  </>
  )
}

export default index;
