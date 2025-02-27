import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../../components/NavBar/NavBar.css';
import { useNavigate } from "react-router-dom";
import logo from '../../components/images/logo.svg';

const Login = () => {

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    rememberMe: Yup.boolean(),
  });

  const navigate = useNavigate();
  function gotoUserdashboard(){
    navigate('/user')
  }
  
  function gotosignup(){
    navigate('/signup') 
  }

  return (
    <div id="OfCanva" className="flex items-center lg:justify-end justify-start lg:me-[8rem] min-h-screen">
      <div className=" p-8 rounded-lg shadow-lg w-96">
        <img src={logo} alt="" />
        <h2 className="text-2xl  opacity-50 mt-5">Log into your account</h2>
        <div className="opacity-85 mt-1">Don't have an account? <a id="Rigerter" onClick={gotosignup} className="cursor-pointer underline font-bold">Register here</a></div>
        <Formik
          initialValues={{ email: "", password: "", rememberMe: false }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">

              <div className="mt-5">
                <Field
                  type="email"
                  name="email"
                   placeholder="Enter your email"
                  className="lg:w-[300px] md:w-[600px] w-full text-white  mt-3 px-4 py-2 border border-gray-300 rounded-[6px] bg-transparent focus:outline-none focus:ring-2 "
                />
                <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
              </div>

              <div >
                 <Field
                   type="password"
                   name="password"
                    placeholder="Enter your Password"
                   className="lg:w-[300px] md:w-[600px] w-full text-white mt-5 px-4 py-2 border border-gray-300 rounded-[6px] bg-transparent focus:outline-none focus:ring-2 focus:ring-white"
                   />
                  <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
                 </div>

              <div className="flex items-center">
                <Field
                  type="checkbox"
                  name="rememberMe"
                  className=" h-4 w-4 border-gray-300 rounded"
                />
                <label className="ml-2 text-white">Remember Me</label>
              </div>

              <button
              onClick={gotoUserdashboard}
                type="submit"
                id="sign"
                className="lg:w-[300px] md:w-[600px] w-full text-white  py-2 rounded-lg transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
