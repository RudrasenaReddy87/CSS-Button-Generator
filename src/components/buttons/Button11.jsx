import React from "react";
import "./Button11style.css";

const Button11 = () => {
  return (
    <div className="button11-wrapper">
      <a
        href="https://github.com/RudrasenaReddy87"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <button className="btn11-bt">
          <div className="btn11-light-holder">
            <div className="btn11-dot"></div>
            <div className="btn11-light"></div>
          </div>
          <div className="btn11-button-holder">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="#ffffff"
            >
              <path d="M12 0.2975C5.37 0.2975 0 5.6675 0 12.2975c0 5.289 3.438 9.775 8.207 11.387.6.113.793-.26.793-.577 0-.285-.011-1.04-.017-2.042-3.338.724-4.042-1.612-4.042-1.612-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.304-5.467-1.332-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.513 11.513 0 0 1 3.003-.403c1.02.005 2.047.138 3.003.403 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.625-5.479 5.921.43.37.823 1.102.823 2.222 0 1.604-.015 2.898-.015 3.293 0 .32.192.694.801.576C20.565 22.068 24 17.584 24 12.2975 24 5.6675 18.627 0.2975 12 0.2975z"/>
            </svg>
            <p>GitHub</p>
          </div>
        </button>
      </a>
    </div>
  );
};

export default Button11;
