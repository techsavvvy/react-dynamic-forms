import React from "react";
import Field from "../dynamic-field/field";
import './group.css';

const FieldGroup = ({ field, fieldChanged, values }) => {
  const fields = field.fields;

  return (
    <fieldset key={field._uid}>
      <h3>{field.label}</h3>
      {fields.map((field) => {
        return (
          <Field
            key={field._uid}
            field={field}
            fieldChanged={fieldChanged}
            value={values[field._uid]}
          />
        );
      })}
    </fieldset>
  );
};

export default FieldGroup;
