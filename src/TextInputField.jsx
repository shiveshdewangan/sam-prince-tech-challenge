import React from "react";

const TextInputField = ({
  label,
  name,
  type,
  handleChange,
  required,
  value
}) => (
  <div>
    <label>{label}:</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      required={required}
    />
  </div>
);

export default TextInputField;
