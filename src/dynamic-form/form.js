import React, { useState, useEffect } from "react";
import FieldGroup from "../dynamic-field-group/group";
import Field from "../dynamic-field/field";
import Option from "../dynamic-field/option";
import './form.css'

const Form = ({ formData }) => {
  const [page] = useState(0);
  const [currentPageData, setCurrentPageData] = useState(formData[page]);
  const [values, setValues] = useState({});

  useEffect(() => {
    const upcomingPageData = formData[page];
    setCurrentPageData(upcomingPageData);
    // TODO:(sasidharan): Work in progress
    // setValues((currentValues) => {
    //   const newValues = upcomingPageData.fields.reduce((obj, field) => {
    //     if (field.component === "field_group") {
    //       for (const subField of field.fields) {
    //         obj[subField.uuid] = "";
    //       }
    //     } else {
    //       obj[field.uuid] = "";
    //     }
    //     return obj;
    //   }, {});
    //   return Object.assign({}, newValues, currentValues);
    // });
  }, [page, formData]);


  const fieldChanged = (fieldId, value) => {
    setValues((currentValues) => {
      // TODO:(Sasidharan) construct a DS to show the response change of each fields
      currentValues[fieldId] = value;
      return currentValues;
    });
    // TODO:(sasidharan) Temp removed WIP
    // setCurrentPageData((currentPageData) => {
    //   return Object.assign({}, currentPageData);
    // });
  };


  const onSubmit = (e) => {
    e.preventDefault();
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
                  key={field.uuid}
                  field={field}
                  fieldChanged={fieldChanged}
                  values={values}
                />
              );
            case "options":
              return (
                <Option
                  key={field.uuid}
                  field={field}
                  fieldChanged={fieldChanged}
                  value={values[field.uuid]}
                />
              );
            default:
              return (
                <Field
                  key={field.uuid}
                  field={field}
                  fieldChanged={fieldChanged}
                  value={values[field.uuid]}
                />
              );
          }
        })}
      <button className="btn-submit" onClick={() => {if(!alert('Successfully submitted!')){window.location.reload();}}}>Submit</button>
    </form>
  );
};

export default Form;
