import { useState } from "react"
import { useNavigate } from "react-router-dom"

const HomepageContainer = () => {
    const [youShouldNotPass, setYouShouldNotPass] = useState("Yes")
    const [tryAgain, setTryAgain] = useState(false)

    const mellon = () => {
        if (youShouldNotPass === "NOPE") {
            setTryAgain(true)
        }
        else
        {
            navigate('/login');
        }
    }
    
    const navigate = useNavigate();

     return (
        <div style={{ display: "flex", flex: 1, height: "100vh", justifyContent: "center"}}>
            <div style={{ alignSelf: "center", justifyContent: "center", textAlign: "center"}}>
                <div style={{ marginBottom: 70, fontSize: 30 }}>Test technique alternant Flying For You</div>
                <button style={{ backgroundColor: "#60EED2", border: "none", padding: "10px 30px", borderRadius: 20, cursor: "pointer" }} onClick={() => mellon()}>{tryAgain ? "Connecte moi ! (page login)" : "Commencer le test"}</button>
                {tryAgain && <div>Tu ne pensais pas que ce serait si simple ? ...</div>}
            </div>
        </div>
     )
}

export default HomepageContainer