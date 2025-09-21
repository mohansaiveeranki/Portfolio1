import React, { useEffect, useState } from "react";
import { Navbar as NavCom } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import "../index.css";

const Navbar1 = () => {
  const [navData, setNavData] = useState(null);

  useEffect(() => {
    const fetchNavData = async () => {
      try {
        const response = await fetch("./profileData/navbar.json");
        const data = await response.json();
        setNavData(data);
      } catch (error) {
        console.error("Error fetching navbar data:", error);
      }
    };
    fetchNavData();
  }, []);

  return (
    <NavCom bg="dark" variant="dark" expand="lg" sticky="top">
      <div className="responsiveCon header">
        {navData && (
          <NavCom.Brand
            href="#home"
            className="d-flex align-items-center justify-content-between gap-3"
          >
            <img
              src={navData.logo.source}
              alt="Logo"
              className="rounded-circle image_con"
              height={navData.logo.height}
              width={navData.logo.width}
            />
            <h1 className="font-weight-bold heading">Portfolio</h1>
          </NavCom.Brand>
        )}

        <NavCom.Toggle aria-controls="basic-navbar-nav" />
      </div>

      <NavCom.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {navData &&
            navData.sections.map((section, index) => (
              <Nav.Link key={index} href={section.href} className="mx-3">
                <h5>{section.title}</h5>
              </Nav.Link>
            ))}
        </Nav>
      </NavCom.Collapse>
    </NavCom>
  );
};

export default Navbar1;
