import React from "react";

const Header = ({ onSearchPage, setCurrentPage }) => {
  return (
    <header>
      <h1>Martha's Cookbook</h1>
      <h2>The original recipes made with love</h2>
      <nav>
        <button 
          onClick={() => {
            setCurrentPage("search");
            onSearchPage();
          }}
        >
          Home
        </button>
        <button 
          className="save" 
          onClick={() => setCurrentPage("saved")}
        >
          Saved
        </button>
      </nav>
    </header>
  );
};

export default Header;
