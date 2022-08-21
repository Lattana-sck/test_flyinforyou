import { useNavigate } from "react-router-dom"
import React from "react"

const HomepageContainer = () => {
    
    const navigate = useNavigate();

     return (
        <div className="flex flex-1 h-screen justify-center bg-[url('https://flying-for-you-data.s3.eu-west-3.amazonaws.com/website-images/bulle-google-avis.webp')]">
            <div className="self-center justify-center text-center">
                <div className="mb-8 text-3xl">Test technique alternant Flying For You</div>
                <button className="hover:bg-teal-500 bg-teal-300 border-none px-6 py-2.5 rounded-3xl cursor-pointer" onClick={() => navigate('/login')}>Continuer</button>
            </div>
        </div>
     )
}

export default HomepageContainer