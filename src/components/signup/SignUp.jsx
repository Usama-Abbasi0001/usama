import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import logo from "../../components/images/logo.svg";

const SignUp = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    username: Yup.string().required("Username is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    zipcode: Yup.string().matches(/^\d{5}$/, "Invalid Zip Code").required("Zipcode is required"),
    phone: Yup.string().matches(/^\d{10}$/, "Invalid phone number").required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Confirm Password is required"),
    country: Yup.string().required("Please select a country"),
  });

  return (
    <div id="OfCanva" className="flex lg:ms-0  md:ms-5 lg:mt-0 md:mt-20 mt-0 md:me-5 lg:justify-end md:justify-start justify-center min-h-screen">
      <div id="OfCanva"  className="flex lg:justify-end md:justify-start justify-center p-8 lg:me-[3rem] rounded-lg shadow-lg lg:w-[340px] 
      w-[340px] md:w-full max-w-lg">
        <div>
        <img src={logo} alt="Logo" className="w-[250px]" />
        <h2 className="text-2xl  opacity-50 mt-2">Create your account</h2>
        <p className="mt-1">
          Already have an account? <span onClick={() => navigate("/login")} id="Rigerter" className="underline cursor-pointer">Login here</span>
        </p>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            username: "",
            address: "",
            city: "",
            zipcode: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
            country: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form className="space-y-4 mt-5">
              <div className="flex space-x-3">
                <div>
                  <Field
                    name="firstName"
                    placeholder="First Name"
                    className="lg:w-[120px] md:w-[240px] w-[120px] h-[40px] ps-3 input-field border border-gray-300 rounded-[7px] bg-transparent focus:outline-none focus:ring-2" />
                  <ErrorMessage name="firstName" component="p" className="text-red-500 text-sm" />
                </div>
                <div>
                  <Field 
                  name="lastName"
                  placeholder="Last Name" 
                  className="lg:w-[140px] md:w-[220px] w-[140px] h-[40px] ps-3  rounded-[7px] input-field border border-gray-300  bg-transparent focus:outline-none focus:ring-2 " />
                  <ErrorMessage name="lastName" component="p" className="text-red-500 text-sm" />
                </div>
              </div>
              <div className="flex flex-col space-y-5">
              <Field 
              name="username" 
              placeholder="Username" 
              className="lg:w-[275px] md:w-[475px] w-[275px] h-[40px] ps-3  rounded-[7px] input-field border border-gray-300 bg-transparent focus:outline-none focus:ring-2 " />
              <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
              
              <Field 
              name="address" 
              placeholder="Home Address" 
              className="lg:w-[275px] md:w-[475px] w-[275px]  h-[40px] ps-3  rounded-[7px] input-field border border-gray-300 bg-transparent focus:outline-none focus:ring-2 " />
              <ErrorMessage name="address" component="p" className="text-red-500 text-sm" />
              </div>
              <div className="flex flex-col space-y-5">
                <div>
                  <Field 
                  name="city" 
                  placeholder="City" 
                  className="lg:w-[275px] md:w-[475px] w-[275px]  h-[40px] ps-3  rounded-[7px] input-field border border-gray-300 bg-transparent focus:outline-none focus:ring-2 " />
                  <ErrorMessage name="city" component="p" className="text-red-500 text-sm" />
                </div>
                <div>
                  <Field 
                  name="zipcode" 
                  placeholder="Zipcode/pascode" 
                  className="lg:w-[275px] md:w-[475px] w-[275px] h-[40px] ps-3  rounded-[7px] input-field border border-gray-300 bg-transparent focus:outline-none focus:ring-2 " />
                  <ErrorMessage name="zipcode" component="p" className="text-red-500 text-sm" />
                </div>
              </div>
              
              <Field 
              name="phone" 
              placeholder="Phone Number:+xxxxxxxxxxxx" 
              className="lg:w-[275px] md:w-[475px] w-[275px] h-[40px] ps-3  rounded-[7px] input-field border border-gray-300 bg-transparent focus:outline-none focus:ring-2 " />
              <ErrorMessage name="phone" component="p" className="text-red-500 text-sm" />
              
              <Field 
              name="email" 
              type="email" 
              placeholder="Email" 
              className="lg:w-[275px] md:w-[475px] w-[275px] h-[40px] ps-3  rounded-[7px] input-field border border-gray-300 bg-transparent focus:outline-none focus:ring-2 " />
              <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
              <div className="flex space-x-3">
              <Field 
              name="password" 
              type="password" 
              placeholder="Password"
               className="lg:w-[120px] md:w-[240px] w-[120px] h-[40px] ps-3  rounded-[7px] input-field border border-gray-300 bg-transparent focus:outline-none focus:ring-2 " />
              <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
              
              <Field 
              name="confirmPassword" 
              type="password" 
              placeholder="Confirm Password" 
              className="lg:w-[140px] md:w-[220px] w-[140px] h-[40px] ps-3  rounded-[7px] input-field border border-gray-300 bg-transparent focus:outline-none focus:ring-2 " />
              <ErrorMessage name="confirmPassword" component="p" className="text-red-500 text-sm" />
              </div>
              <Field 
                 as="select" 
                 name="country" 
                className="w-full h-[45px] px-4 rounded-[7px] border border-gray-300 bg-transparent focus:outline-none focus:ring-2">
                   <option value="" className="text-gray-400 bg-black">Select Country</option>
                   <option value="USA" className="bg-black text-white">USA</option>
                   <option value="Canada" className="bg-black text-white">Canada</option>
                   <option value="UK" className="bg-black text-white">UK</option>
                      </Field>

              <ErrorMessage name="country" component="p" className="text-red-500 text-sm" />

              <button 
              type="submit" 
               id="sign"
              className="lg:w-[275px] md:w-[475px] w-[275px] text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
        </div>
        
      </div>
    </div>
  );
};

export default SignUp;

// Tailwind Input Field Styling
// const inputFieldStyles = `border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500`;
