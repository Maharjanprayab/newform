import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./form.css";

export const SignupForm = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
      initialValues: {
        email: '',
      },
      validationSchema: yup.object({
        email: yup.string().required(),
      }),
      onSubmit: values => {
        console.log("from values", values);
      },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email && (
                <div className="errors">{formik.errors.email}</div>
            )}
  
        <button type="submit">Submit</button>
      </form>
    );
  };