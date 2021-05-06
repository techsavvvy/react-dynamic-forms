import React, { useState, useEffect } from "react";
import FieldGroup from "../dynamic-field-group/group";
import Field from "../dynamic-field/field";
import Option from "../dynamic-field/option";
import './form.css'

const Form = ({ formData }) => {
  const [page] = useState(0);
  console.log(useState(formData[page]))
  const [currentPageData, setCurrentPageData] = useState(formData[page]);
  const [values, setValues] = useState({});

  useEffect(() => {
    const upcomingPageData = formData[page];
    setCurrentPageData(upcomingPageData);
    setValues((currentValues) => {
      const newValues = upcomingPageData.fields.reduce((obj, field) => {
        if (field.component === "field_group") {
          for (const subField of field.fields) {
            obj[subField._uid] = "";
          }
        } else {
          obj[field._uid] = "";
        }
        return obj;
      }, {});
      return Object.assign({}, newValues, currentValues);
    });
  }, [page, formData]);


  const fieldChanged = (fieldId, value) => {
    setValues((currentValues) => {
      currentValues[fieldId] = value;
      return currentValues;
    });
    setCurrentPageData((currentPageData) => {
      return Object.assign({}, currentPageData);
    });
  };


  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>{currentPageData.label}</h1>
      {currentPageData.fields
        .map((field) => {
          switch (field.component) {
            case "field_group":
              return (
                <FieldGroup
                  key={field._uid}
                  field={field}
                  fieldChanged={fieldChanged}
                  values={values}
                />
              );
            case "options":
              return (
                <Option
                  key={field._uid}
                  field={field}
                  fieldChanged={fieldChanged}
                  value={values[field._uid]}
                />
              );
            default:
              return (
                <Field
                  key={field._uid}
                  field={field}
                  fieldChanged={fieldChanged}
                  value={values[field._uid]}
                />
              );
          }
        })}
      <button class="btn-submit" onClick={() => {if(!alert('Successfully submitted!')){window.location.reload();}}}>Submit</button>
    </form>
  );
};

export default Form;
