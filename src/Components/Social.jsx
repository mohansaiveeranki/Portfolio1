import { useState, useEffect } from "react";
import "./Social.css"; 

const Social = () => {
  const [socialData, setSocialData] = useState(null);

  useEffect(() => {
    const fetchTheData = async () => {
      try {
        let response = await fetch("/profileData/social.json"); // ✅ fixed path
        let data = await response.json();
        setSocialData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTheData();
  }, []);

  return (
    <div className="social-container" id="social">
      {socialData ? (
        socialData.social.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img
              src={social.image}
              alt={social.network}
              className="social-icon"
            />
            {social.network}
          </a>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Social;
