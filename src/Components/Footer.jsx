import React, { useEffect, useState } from 'react';
import "./Footer.css";

const Footer = () => {
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    const fetchTheData = async () => {
      try {
        const response = await fetch("/profileData/footer.json");
        if (!response.ok) throw new Error("Failed to fetch footer data");

        const data = await response.json();
        setFooter(data);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };

    fetchTheData();
  }, []);

  if (!footer) return <p>Loading footer...</p>;

  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <h2>{footer.introText}</h2>
        <p>{footer.description}</p>
        <a href={footer.contactLink} className="contact-button">
          {footer.buttonText}
        </a>

        <div className="social-links">
          <h3>{footer.socialTitle}</h3>
          <div className="social-icons">
            {footer.socialLinks?.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                <img src={link.icon} alt={`Social Icon ${index}`} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="design">
            {footer.author} &copy; {footer.copyright}
          </p>
        </div>
      </div>

      <div id="moreLinks">
        <a href="#home">Home</a>
        <a href="#social">Social</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#footer">Footer</a>
      </div>
    </footer>
  );
};

export default Footer;
