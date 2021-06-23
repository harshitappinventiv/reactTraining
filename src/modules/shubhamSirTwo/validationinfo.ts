import { UserSchema } from ".";

export interface Errors {
  username?: string;
  fname?: string;
  lname?: string;
  email?: string;
  password?: string;
}

export default function validateInfo(values: UserSchema) {
  let errors: Errors = {};

  if (!values.fname.trim()) {
    errors.fname = "first name required";
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }
  if (!values.lname.trim()) {
    errors.lname = "last name required";
  }

  if (!values.email) {
    errors.email = "email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Gmail address is invalid";
  }

  if (!values.password) {
    errors.password = "password required";
  } else if (values.password.length < 5) {
    console.log("pass", values.password.length);
    errors.password = "password should be at least 5 characters";
  }

  return errors;
}
