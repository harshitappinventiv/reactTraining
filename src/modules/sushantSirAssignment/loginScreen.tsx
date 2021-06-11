import { useState } from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ******************************* components ****************************
import MovieHomeScreen from "./movieHomeScreen";

import LocalsImage from "../../utils/images";

const InputName = styled.div`
  height: 50px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px 20px;
  color: brown;
`;

// ******************************* create movieData ****************************
const createMovieData = (
  id: number,
  link: string,
  movieName: string,
  rating: string,
  releaseDate: string
) => {
  return { id, link, movieName, rating, releaseDate };
};

const movieData = [
  createMovieData(1, LocalsImage.MOVIE_JUDY, "Judy", "3", "23/8/2003"),
  createMovieData(2, LocalsImage.MOVIE_GROOT, "Groot", "4", "02/8/2010"),
  createMovieData(3, LocalsImage.MOVIE_LOKI, "Loki", "5", "02/6/2021"),
];

const initialValues = {
  gmail: "",
  password: "",
};

// * yup validitiones
const validationSchema = Yup.object({
  gmail: Yup.string().email("Invaild gmail format").required("required!"),
  password: Yup.string().required("Required!"),
});

function LoginScreen() {
  const [loginSuccess, setLoginSuccess] = useState(false);

  const onSubmit = (values: any) => {
    console.log(values);
    values ? setLoginSuccess(true) : setLoginSuccess(false);
  };

  return (
    <>
      {!loginSuccess ? (
        <div>
          <h1 style={{ margin: "20px" }}>Login page</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form>
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
        <MovieHomeScreen movieData={movieData} />
      )}
    </>
  );
}

export default LoginScreen;
