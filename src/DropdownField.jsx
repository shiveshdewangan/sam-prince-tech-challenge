import React from "react";

const DropdownField = ({ label, name, options, handleChange, value }) => (
  <div>
    <label>{label}:</label>
    <select name={name} onChange={handleChange} value={value}>
      {options.map((option, index) => {
        return <option key={index}>{option}</option>;
      })}
    </select>
  </div>
);

export default DropdownField;
