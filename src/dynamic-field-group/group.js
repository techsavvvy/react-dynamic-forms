import React from "react";
import Field from "../dynamic-field/field";
import './group.css';

const FieldGroup = ({ field, fieldChanged, values }) => {
  const fields = field.fields;

  return (
    <fieldset key={field.uuid}>
      <h3>{field.label}</h3>
      {fields.map((field) => {
        return (
          <Field
            key={field.uuid}
            field={field}
            fieldChanged={fieldChanged}
            value={values[field.uuid]}
          />
        );
      })}
    </fieldset>
  );
};

export default FieldGroup;
