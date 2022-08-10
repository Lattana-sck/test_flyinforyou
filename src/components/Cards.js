import React, { useState } from "react";

function Cards({ img, title}) {
  
  return (
    <div className="text-gray-700 text-center bg-gray-400 p-2">
        <h1>{title}</h1>
        <img
          className="w-full"
          src={`https://cinemazero.it/media/photologue/photos/temp/cache${img}_display.jpg`}
          alt=""
          />
      </div>
  );
}

export default Cards;
