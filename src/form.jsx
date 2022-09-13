import React from "react";
import { useFormik, Formik, Form, Field, ErrorMessage, yupToFormErrors } from "formik";
import * as yup from "yup";


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
          onChange={formik.handleChange}
          value={formik.values.email}
        />
  
        <button type="submit">Submit</button>
      </form>
    );
  };
  
const Basic = () => (
    <div>
        <h1>Anywhere in your app!</h1>
        <Formik
            initialValues={{email: '', password: ''}}
            validate={values => {
                const errors = {};
                if (!values.email){
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if(!values.password){
                  errors.password = 'Required'
                }
                return errors;
            }}
            onSubmit={(values)=> {
              console.log("from values", values);
            }}
        >

            {({isSubmitting}) => (
                <Form>
                    <Field type='email' name='email'/>
                    <ErrorMessage name='email' component='div'/>
                    <Field type='password' name='password'/>
                    <ErrorMessage name='password' component='div'/>
                    <button type="submit" disable={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}

        </Formik>
    </div>


)



export default Basic;