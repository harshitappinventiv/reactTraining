import { useState } from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ******************************* components ****************************
import LoginScreen from "./loginScreen";

const InputName = styled.div`
  height: 50px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px 20px;
  color: brown;
`;

const initialValues = {
  name: "",
  gmail: "",
  password: "",
};

// * yup validitiones
const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  gmail: Yup.string().email("Invaild gmail format").required("required!"),
  password: Yup.string().required("Required!"),
});

function SignupScreen() {
  const [signupSuccess, setSignupSuccess] = useState(false);

  const onSubmit = (values: any) => {
    console.log(values);
    localStorage.setItem("user", JSON.stringify(values));
    values ? setSignupSuccess(true) : setSignupSuccess(false);
  };

  return (
    <>
      {!signupSuccess ? (
        <div>
          <h1 style={{ margin: "20px" }}>Sign up page</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form>
              <InputName>
                <Label htmlFor="name">Name</Label>
                <Field
                  type="text"
                  placeholder="Enter Name"
                  id="name"
                  name="name"
                />
                <ErrorMessage name="name" />
              </InputName>
              <InputName>
                <Label htmlFor="gmail">Gmail</Label>
                <Field
                  type="text"
                  placeholder="Enter Gmail"
                  id="gmail"
                  name="gmail"
                />
                <ErrorMessage name="gmail" />
              </InputName>
              <InputName>
                <Label htmlFor="password">Password</Label>
                <Field
                  type="text"
                  placeholder="Enter Password"
                  id="password"
                  name="password"
                />
                <ErrorMessage name="password" />
              </InputName>
              <Button type="submit">Submit</Button>
            </Form>
          </Formik>
        </div>
      ) : (
        <LoginScreen />
      )}
    </>
  );
}

export default SignupScreen;
