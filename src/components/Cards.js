import React, { useState } from "react";

function Cards({ img, title, closeModal}) {
  
  return (
    <div className="text-gray-700 text-center bg-gray-400 p-2 ">
        <h1 className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
         onClick={() => closeModal(true)}>{title}</h1>
        <img
          className="w-full object-cover"
          src={img}
          alt=""
          />
      </div>
  );
}

export default Cards;
