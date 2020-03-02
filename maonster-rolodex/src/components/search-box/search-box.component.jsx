import React from "react";
import "./search-box.styles.css";

//We are destructuring the placeholder to make it Dynamic
//
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
