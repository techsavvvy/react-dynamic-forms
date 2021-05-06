import React from "react";
import "./field.css";

const Field = ({ field, fieldChanged, type, value }) => {
  return (
    <div className="container" align="centre" key={field._uid}>
      <div className="align-label">
        <label htmlFor={field._uid}>{field.label}</label>
      </div>
      <div className="align-input">
        {" "}
        <input
          type={type || field.component}
          id={field._uid}
          name={field._uid}
          value={value}
          onChange={(e) => {
            // Notify the main state list of the new value
            fieldChanged(field._uid, e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Field;
