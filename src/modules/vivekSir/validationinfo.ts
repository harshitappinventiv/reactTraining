export default function validateInfo(values: any) {
  let errors: any = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.gmail) {
    errors.gmail = "Gmail required";
  } else if (!/\S+@\S+\.\S+/.test(values.gmail)) {
    errors.gmail = "Gmail address is invalid";
  }
  if (!values.degree.trim()) {
    errors.degree = "Degree required";
  }
  if (!values.hobbie.trim()) {
    errors.hobbie = "Hobbie required";
  }

  return errors;
}
