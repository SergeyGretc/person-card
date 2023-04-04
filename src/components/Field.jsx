import React from "react";

const Field = ({ onChange, name, value, label, type, error }) => {
  const getClass = () => {
    if (error[name]) {
      return " form-control is-invalid";
    }
    return "form-control ";
  };
  return (
    <div className="mb-3  has-validation">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        className={getClass()}
        name={name}
        id={name}
        value={value}
        type={type}
        onChange={onChange}
      />

      {error && <div className="invalid-feedback"> {error[name]}</div>}
    </div>
  );
};
Field.defaultValues = {
  type: "text",
};
export default Field;
