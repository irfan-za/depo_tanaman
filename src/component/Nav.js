import React, { useState, useRef, useEffect } from "react";
import "./../App.css";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

// import animasi utk pemanggilan lewat classname
import "animate.css/animate.min.css";
// import sidebar(react-burger-menu)
import Sidebar from ".././component/Sidebar";

function Navs() {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 0;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log({ Sidebar });
  return (
    <div>
      <Navbar
        className="ini-navbar"
        style={{
          transition: ".6s ease-in",
          backgroundColor: navBackground ? "#156B39" : "transparent",
          boxShadow: navBackground ? "0 3px 10px rgba(0, 0, 0, 0.5)" : "none",
          // background: "#050510",
          background: "transparent",
        }}
        fixed="top"
        expand="md"
      >
        <div className="container">
          {/* <ScrollAnimation animateIn="backInLeft" animateOut="bounceOutUp"></ScrollAnimation> */}
          <Navbar.Brand
            className="navbar-brand animate__animated animate__bounceInDown"
            style={{ color: "#37cc00", fontSize: "30px" }}
            href="#home"
          >
            <span
              className="navbar-brandnya"
              style={{
                fontSize: "32px",
                fontFamily: `'Poppins', sans-serif`,
                letterSpacing: "2px",
                fontWeight: "bold",
              }}
            >
              DEPO TANAMAN
            </span>
            <FontAwesomeIcon
              style={{ transform: `translateY(-3px)` }}
              icon={faLeaf}
            />
          </Navbar.Brand>

          <Sidebar />
          {/* <Navbar.Toggle
            style={{
              outline: "none",
              border: "2px solid #fff",
              filter: "drop-shadow(0 0 6px white)",
            }}
            aria-controls="basic-navbar-nav"
          /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto navlink">
              <a
                className="animate__animated animate__backInRight"
                href="#home"
                style={{ color: navBackground ? "#AEFEB3" : "#fff" }}
              >
                HOME
              </a>
              <a
                className="animate__animated animate__backInRight"
                style={{ color: navBackground ? "#AEFEB3" : "#fff" }}
                href="#about"
              >
                ABOUT
              </a>
              <a
                className="animate__animated animate__backInRight "
                style={{ color: navBackground ? "#AEFEB3" : "#fff" }}
                href="#bibit"
              >
                BIBIT
              </a>
              <a
                className="animate__animated animate__backInRight "
                style={{ color: navBackground ? "#AEFEB3" : "#fff" }}
                href="#kontak"
              >
                KONTAK
              </a>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Navs;
