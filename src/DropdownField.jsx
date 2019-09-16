import React from "react";

const DropdownField = ({ label, name, options, handleChange, value }) => (
  <div>
    <label>{label}:</label>
    <select name={name} onChange={handleChange} value={value}>
      {options.map((option) => {
        return <option>{option}</option>;
      })}
    </select>
  </div>
);

export default DropdownField;
