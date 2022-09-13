import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./testForm.css";

export const New = () => {
  const doShow = (values) => {
    console.log("from values", values);
  };

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
    },
    validationSchema: yup.object({
      fname: yup.string().required(),
      lname: yup.string().required(),
    }),
    onSubmit: doShow,
  });
  return (
    <div>
      <h1>New testing place</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="fname">First name</label>
          <input type="text"
          name="fname"
          id="fname"
          {...formik.getFieldProps("fname")}
          />
          {formik.touched.fname && formik.errors.fname && (
            <div className="error">{formik.errors.fname}</div>
          )}
        </div>
        <div className="form-group">
            <label htmlFor="lname">Last name</label>
            <input type="text"
            name="lname"
            id="lname"
            {...formik.getFieldProps("lname")}
            />
            {formik.touched.lname && formik.errors.lname && (
                <div className="error">{formik.errors.lname}</div>
            )}
        </div>
        <button type="submit" disabled={formik.isSubmitting}>
            Submit
        </button>
      </form>
    </div>
  );
};