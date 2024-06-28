// SearchBar.jsx
import React from "react";
import SearchIcon from '@mui/icons-material/Search';


function SearchBar({ searchTerm, onSearchChange,onSearch }) {
  return (
    <div>
    <input
    className="search-bar"
      type="text"
      placeholder="Search your notes..."
      value={searchTerm}
      onChange={onSearchChange}
      style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
      
    />
    
    </div>
  );
}

export default SearchBar;
