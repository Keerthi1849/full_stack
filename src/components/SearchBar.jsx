import React from "react";

const SearchBar = ({ value, isLoading, handleSubmit, onChange }) => {
  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={value}
        disabled={isLoading}
        onChange={onChange}
        placeholder="Search Recipes"
        className="form-control"
      />
      <button
        disabled={isLoading || !value}
        type="submit"
        className="btn"
      >
        {isLoading ? "Searching..." : "🔍"}
      </button>
    </form>
  );
};

export default SearchBar;
