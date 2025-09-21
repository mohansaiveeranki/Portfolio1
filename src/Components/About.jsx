import { useEffect, useState } from "react";
import "./About.css";

let About = () => {
  let [about, setAbout] = useState(null);

  let fetchTheData = async () => {
    try {
      let response = await fetch("/profileData/about.json"); // from public folder
      let data = await response.json();
      setAbout(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchTheData();
  }, []);

  return (
    <div className="about-container" id="about">
      <h1>About Me</h1>
      {about ? (
        <>
          <div className="child-container">
            {/* text + button */}
            <div className="about-text">
              <p>{about.about}</p>
              <a
                href={about.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="animated-button">Resume</button>
              </a>
            </div>

            {/* image */}
            <div className="image-container">
              <img src={about.imageSource} alt="about" />
            </div>
          </div>

          <div className="subchild-container"></div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default About;
