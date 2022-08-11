import React, { useState } from 'react'
import { FaRegStar, FaVoteYea } from 'react-icons/fa';
import { BsCalendarDate } from 'react-icons/bs';
function Modals({title, overview, release_date, vote_average, vote_count, closeModal}) {

  return (
    <div className='modals text-center'>
      <h1>{title}</h1>
      <h2>{overview}</h2>
      <p className='justify-center flex'><BsCalendarDate/>&nbsp;&nbsp;{release_date}</p>
      <p className='justify-center flex'><FaVoteYea/>&nbsp;&nbsp;{vote_count}</p>
      <p className="justify-center flex"><FaRegStar/>&nbsp;&nbsp;{vote_average}</p>
      <button 
      className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
      onClick={() => closeModal(false) }>Fermer</button>
    </div>
  )
}

export default Modals