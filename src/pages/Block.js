import React from 'react';
import Logo from "./../assets/logo.png";
import Building from "./../assets/building.jpg";
import { useNavigate } from "react-router-dom";


const Block = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div>
        <style
    dangerouslySetInnerHTML={{
      __html:
        "\n      /* Custom Scrollbar Styles */\n      ::-webkit-scrollbar {\n        width: 16px;\n        height: 16px;\n      }\n\n      ::-webkit-scrollbar-track {\n        background-color: #f1f1f1;\n        border-radius: 8px;\n        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);\n      }\n\n      ::-webkit-scrollbar-thumb {\n        background-color: #3115e7;\n        border-radius: 8px;\n        border: 4px solid #f1f1f1;\n        transition: background-color 0.3s ease;\n      }\n\n      ::-webkit-scrollbar-thumb:hover {\n        background-color: #e3c729;\n      }\n\n      ::-webkit-scrollbar-horizontal {\n        height: 16px;\n      }\n\n      body {\n        margin: 0;\n        padding: 0;\n        background-color: #f4f4f4;\n      }\n\n      .header_section {\n        background-color: rgba(\n          161,\n          189,\n          221,\n          0.1\n        ); /* Almost fully transparent */\n        padding: 5px 0;\n        width: 100%;\n        position: fixed;\n        top: 0;\n        left: 0;\n        z-index: 1000;\n        transition: background-color 0.3s ease-in-out;\n      }\n\n      .header_section.scrolled {\n        background-color: #1164c3; /* Solid color after scrolling */\n      }\n\n      .navbar {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 0 20px;\n      }\n\n      .navbar-brand img {\n        height: 40px;\n        width: 125px;\n      }\n\n      .navbar-nav {\n        display: flex;\n        gap: 20px;\n        list-style: none;\n        padding: 0;\n        margin: 0;\n      }\n\n      .nav-item a {\n        text-decoration: none;\n        color: white;\n        font-size: 16px;\n        font-weight: bold;\n        transition: transform 0.3s ease, padding 0.3s ease;\n      }\n\n      .nav-item a:hover {\n        transform: scale(1.1);\n        padding: 12px 24px;\n      }\n\n      .User_option {\n        display: flex;\n        gap: 15px;\n        margin-left: auto;\n      }\n\n      .User_option a {\n        padding: 10px 20px;\n        border-radius: 5px;\n        text-decoration: none;\n        font-weight: bold;\n        transition: transform 0.3s ease, padding 0.3s ease;\n      }\n\n      .User_option a:first-child {\n        background-color: transparent;\n        border: 2px solid white;\n        color: white;\n      }\n\n      .User_option a:last-child {\n        background-color: #ff9800;\n        color: white;\n      }\n    "
    }}
  />
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="/">
              <img src={Logo} alt="" />
            </a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#house">
                  Blocks
                </a>
              </li>
              <div className="User_option">
              <a href="Login">Sign In</a>
              <a href="register">Sign Up</a>
            </div>
            </ul>
          </nav>
        </div>
      </header>

      <div className="building-container-wrapper">
        <div className="building-container">
          <img src={Building} alt="Block B Building" className="building-image" />
          {/* Floors (Sold and Available) */}
          <div
            className="floor available"
            style={{
              top: "13%",
              width: 140,
              left: "50%",
              height: 46,
              transform: "translateX(-94%) translateX(-40px)"
            }}
            onClick={() => navigate("/Plan")} 
          />
          <div
            className="floor sold"
            style={{
              top: "18%",
              width: 176,
              height: 40,
              left: "50%",
              transform: "translateX(-75%) translateX(-40px)"
            }}
          />
          <div
            className="floor available"
            style={{
              top: "22%",
              width: 200,
              height: "42.7px",
              left: "50%",
              transform: "translateX(-66%) translateX(-40px)"
            }}
            onClick={() => navigate("/Plan")} // Change to navigate
          />
          <div
            className="floor available"
            style={{
              top: "26.5%",
              width: 227,
              height: 47,
              left: "50%",
              transform: "translateX(-58%) translateX(-40px)"
            }}
            onClick={() => navigate("/Plan")} // Change to navigate
          />
          <div
            className="floor sold"
            style={{
              top: "31.3%",
              width: 388,
              height: 45,
              left: "50%",
              transform: "translateX(-34%) translateX(-40px)"
            }}
          />
          <div
            className="floor available"
            style={{
              top: "36%",
              width: 388,
              height: 45,
              left: "50%",
              transform: "translateX(-34%) translateX(-40px)"
            }}
            onClick={() => navigate("/Plan")} // Change to navigate
          />
          <div
            className="floor sold"
            style={{
              top: "40.7%",
              width: 388,
              height: 45,
              left: "50%",
              transform: "translateX(-34%) translateX(-40px)"
            }}
          />
          <div
            className="floor available"
            style={{
              top: "45.4%",
              width: 388,
              height: 38,
              left: "50%",
              transform: "translateX(-34%) translateX(-40px)"
            }}
            onClick={() => navigate("/Plan")} // Change to navigate
          />
          <div
            className="floor available"
            style={{
              top: "49.4%",
              width: 388,
              height: 43,
              left: "50%",
              transform: "translateX(-34%) translateX(-40px)"
            }}
            onClick={() => navigate("/Plan")} // Change to navigate
          />
          <div
            className="floor sold"
            style={{
              top: "53.9%",
              width: 388,
              height: 43,
              left: "50%",
              transform: "translateX(-34%) translateX(-40px)"
            }}
          />
          <div
            className="floor available"
            style={{
              top: "58.3%",
              width: 388,
              height: 43,
              left: "50%",
              transform: "translateX(-34%) translateX(-40px)"
            }}
            onClick={() => navigate("/Plan")} // Change to navigate
          />
          <div
            className="floor sold"
            style={{
              top: "62.8%",
              width: 388,
              height: 43,
              left: "50%",
              transform: "translateX(-34%) translateX(-40px)"
            }}
          />
          <div
            className="floor available"
            style={{
              top: "67.3%",
              width: 388,
              height: 44,
              left: "50%",
              transform: "translateX(-34%) translateX(-40px)"
            }}
            onClick={() => navigate("/Plan")} // Change to navigate
          />
          <div
            className="floor available"
            style={{
              top: "71.9%",
              width: 440,
              height: 45,
              left: "50%",
              transform: "translateX(-42%) translateX(-40px)"
            }}
            onClick={() => navigate("/Plan")} // Change to navigate
          />
          <div
            className="floor sold"
            style={{
              top: "76.2%",
              width: 441,
              height: 45,
              left: "50%",
              transform: "translateX(-42%) translateX(-40px)"
            }}
          />
          <div
            className="floor available"
            style={{
              top: "80.9%",
              width: 441,
              height: 45,
              left: "50%",
              transform: "translateX(-42%) translateX(-40px)"
            }}
            onClick={() => navigate("/Plan")} // Change to navigate
          />
          <div
            className="floor sold"
            style={{
              top: "85.6%",
              width: 440,
              height: 45,
              left: "50%",
              transform: "translateX(-42%) translateX(-40px)"
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Block;
