import React, { useState } from "react";
import { AiTwotoneCalendar, AiOutlineStar, AiFillLike } from "react-icons/ai";
import { useDispatch } from "react-redux";

function Cards({
  title,
  image,
  description,
  release_date,
  vote_average,
  vote_count,
  id,
  liked,
}) {
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();

  return (
    <div
      id={id}
      className="relative text-gray-700 text-center p-2 w-1/4 hover:shadow-2xl"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <h1 className="flex justify-between bg-teal-500 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-600 rounded">
        <span>
          <AiFillLike className="text-transparent" />
        </span>
        {title}
        <span>
          <AiFillLike
            className={`${
              liked ? "text-blue-500 hover:text-blue-700" : ""
            } rounded align-middle text-xl`}
            onClick={() =>
              dispatch({
                type: "movie/likeMovie",
                payload: { id, liked: !liked },
              })
            }
          />
        </span>
      </h1>

      <img
        src={image}
        alt=""
        className="z-1 w-full h-96"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://www.fleurette-constructeur.fr/wp-content/uploads/2019/09/image-placeholder.jpg";
        }}
      />

      {isShown && (
        <p className="pt-10 bg-teal-100 opacity-90 absolute z-2 top-[170px] mr-2 border-2 border-teal-500 overflow-auto h-[60%]">
          <span className="justify-center flex content-center">
            <AiTwotoneCalendar />
            &ensp;{release_date}
          </span>
          <span className="justify-center flex content-center">
            <AiOutlineStar />
            &ensp;{vote_average}
          </span>
          <span className="justify-center flex content-center">
            <AiFillLike />
            &ensp;{vote_count}
          </span>

          {description}
          <br></br>
        </p>
      )}
    </div>
  );
}

export default Cards;
