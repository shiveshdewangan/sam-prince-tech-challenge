import React from "react";

const DateInputField = ({
  name,
  type,
  label,
  required,
  handleChange,
  value
}) => (
  <>
    <div>
      <label>{label}:</label>
      <input
        type={type}
        name={name}
        required={required}
        onChange={handleChange}
        value={value}
      />
    </div>
  </>
);

export default DateInputField;
