import React, { useEffect, useState } from "react";
import "./Education.css";
import { Chrono } from "react-chrono";

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const fetchEducationData = async () => {
      try {
        const response = await fetch("./profileData/education.json");
        const data = await response.json();
        setEducation(data.education);
      } catch (error) {
        console.error("Error fetching education data:", error);
      }
    };
    fetchEducationData();
  }, []);

  return (
    <div className="education-container" id="education">
      <h2 className="section-title">Education</h2>

      <div className="education__wrapper">
        <Chrono
          items={education.map((edu) => ({
            title: edu.title, 
            cardTitle: edu.cardTitle,
            cardSubtitle: edu.cardSubtitle,
            cardDetailedText: edu.cardDetailedText,
          }))}
          mode="VERTICAL_ALTERNATING"
          disableToolbar
          cardHeight={null}
          className="education__container"
        />
      </div>
    </div>
  );
};

export default Education;
