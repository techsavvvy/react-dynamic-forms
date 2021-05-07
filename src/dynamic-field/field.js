import React from "react";
import "./field.css";

const Field = ({ field, fieldChanged, type, value }) => {
  return (
    <div className="container" align="centre" key={field.uuid}>
      <div className="align-label">
        <label htmlFor={field.uuid}>{field.label}</label>
      </div>
      <div className="align-input">
        {" "}
        <input
          type={type || field.component}
          id={field.uuid}
          name={field.uuid}
          value={value}
          onChange={(e) => {
            // Notify the main state list of the new value
            fieldChanged(field.uuid, e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Field;
