import { useEffect, useState } from "react";
import "./Skill.css";

const Skill = () => {
  const [skills, setSkills] = useState(null);

  const fetchTheData = async () => {
    try {
      let response = await fetch("/profileData/skill.json"); 
      let data = await response.json();
      setSkills(data.skills);
    } catch (error) {
      console.error("Error fetching skills data:", error);
    }
  };

  useEffect(() => {
    fetchTheData();
  }, []);

  return (
    <div className="skills-container" id="skills">
      <h1 className="krishna">Skills</h1>
      {skills && (
        <div className="grid-container">
          {skills.map((section, idx) => (
            <div key={idx} className="skills-section">
              <h3>{section.title}</h3>
              <div className="skills-items">
                {section.items.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <img src={skill.icon} alt={skill.title} />
                    <p>{skill.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Skill;
