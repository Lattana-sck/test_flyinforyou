import Cards from "../../components/Cards";
import { datas } from "../list-de-films";
import React, { useState } from "react";
import Modals from "../../components/Modals";

function Index() {
  const [openModal, setOpenModal] = useState(false);


  return (
    <>
    <div className="flex content-center flex-wrap bg-gray-200">
      {datas.map((data) => (

        <div className="w-1/6 p-2 flex flex-col">
          <Cards
            id={data.id} 
            key={data.id} 
            img={data.poster_path} 
            title={data.title}
            closeModal={setOpenModal}
          />

          {openModal === data.id && <Modals
            key={data.id} 
            img={data.backdrop_path} 
            title={data.title}
            overview={data.overview}
            release_date={data.release_date}
            vote_average={data.vote_average}
            vote_count={data.vote_count}
            closeModal={setOpenModal}
          />
          }
        </div>
      ))};
    </div>
  </>
  )
}

export default Index;
