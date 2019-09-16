import React from "react";

const PhoneInputField = ({
  type,
  name,
  label,
  handleChange,
  value,
  required
}) => (
  <div>
    <label>{label}:</label>
    <input
      type={type}
      name={name}
      onChange={handleChange}
      value={value}
      required={required}
    />
  </div>
);

export default PhoneInputField;
