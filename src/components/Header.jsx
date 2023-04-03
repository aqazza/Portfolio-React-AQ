import React from "react";
import "./Header.css"; // assuming that you have saved the CSS code in a file named Header.css

function Header() {
  return (
    <div className="header">
      <div className="inner-header flex">
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Anas Qazza</span>
            <span className="heading-primary-sub"> Portfolio</span>
          </h1>
        </div>
      </div>
      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="#7dce94" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="#1ab283" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="#fff" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#3d7c47" />
          </g>
        </svg>
      </div>
      <div className="content flex">
        <p>Made WithReact | Thanks for stopping by </p>
      </div>
    </div>
  );
}

export default Header;
