import { useEffect, useState } from "react"; 
import "./Home.css"; 
import TypeWriter from "./TypeWriter";  

let Home = () => { 
    const [profileData, setProfileData] = useState(null); 

    const fetchTheData = async () => { 
        try { 
            const response = await fetch("/profileData/home.json");
            const data = await response.json(); 
            setProfileData(data);  
        } catch (error) { 
            console.error("Error fetching data:", error); 
        } 
    }; 

    useEffect(() => { 
        fetchTheData(); 
    }, []); 

    return ( 
        <div className="home-Container" id="home"> 
            {profileData ? ( 
                <div className="child-Container"> 
                    <h2 id="name">{profileData.name}</h2> 
                    <h2>
                        I'm&nbsp;
                        <TypeWriter texts={profileData.roles}/> 
                    </h2> 
                </div> 
            ) : ( 
                <p>Loading...</p> 
            )} 
        </div> 
    ); 
}; 

export default Home;
