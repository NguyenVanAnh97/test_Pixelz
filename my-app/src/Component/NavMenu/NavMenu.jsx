import React from "react";
import "./NavMenu.scss";

function NavMenus() {
  return (
    <div className="header-pixels">
      <div className="container">
        <div className="table">
          <div className="Logo">
            <h1>PIXELZ</h1>
          </div>

          <div className="Menu">
            <ul className="MenuList">
              <li className="MenuItem">Home</li>
              <li className="MenuItem">About</li>
              <li className="MenuItem">Blog</li>
              <li className="MenuItem">Careers</li>
            </ul>
          </div>

          <div className="JoinUs">
            <button>Join our talent network</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMenus;
