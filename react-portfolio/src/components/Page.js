import NavTabs from "./Navbar";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { useState } from "react";
import Footer from "./Footer";
import { Resume } from "./pages/Resume";

export default function Page() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  return (
    <div className="body">
      <div className="head-and-body">
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {renderPage()}
      </div>
      {Footer()}
    </div>
  );
}
