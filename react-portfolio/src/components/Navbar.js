import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="navbar">
      <div className="header-titles">
        <h1 className="primary-heading">Nicol Mouton</h1>
        <h4 className="secondary-heading"> Full-Stack Developer</h4>
      </div>
      <li
        onClick={() => handlePageChange("About")}
        className={currentPage === "About" ? "navbar-tab-active" : "navbar-tab"}
      >
        <span>About Me</span>
      </li>
      <li
        onClick={() => handlePageChange("Portfolio")}
        className={
          currentPage === "Portfolio" ? "navbar-tab-active" : "navbar-tab"
        }
      >
        <span>Portfolio</span>
      </li>
      <li
        onClick={() => handlePageChange("Contact")}
        className={
          currentPage === "Contact" ? "navbar-tab-active" : "navbar-tab"
        }
      >
        <span>Contact</span>
      </li>

      <li
        onClick={() => handlePageChange("Resume")}
        className={
          currentPage === "Resume" ? "navbar-tab-active" : "navbar-tab"
        }
      >
        <span>Resume</span>
      </li>
    </div>
  );
}

export default NavTabs;
