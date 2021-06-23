import { useState, useEffect } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Box,
  Button,
  TextField,
  Paper,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import validate, { Errors } from "./validationinfo";

// ******************************* components *******************************

type AppProps = {
  setLoading: any;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    createGrid: {
      display: "grid",
      gridGap: theme.spacing(1),
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  })
);

const Signup = ({ setLoading }: AppProps) => {
  const initialFormState: any = {
    id: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
  };

  const classes = useStyles();
  const [values, setValues] = useState(initialFormState);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value }: any = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      const id = uuidv4();
    //   console.log(values, id);
      setLoading(true);
      setTimeout(() => {
        localStorage.setItem("accessToken", id);
        setLoading(false);
        history.push("/product");
      }, 2000);
    }
  }, [errors]);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="500px"
    >
      <form
        onSubmit={handleSubmit}
        className="form"
        noValidate
        autoComplete="off"
      >
        <Box className={classes.createGrid} component={Paper} p={3}>
          <TextField
            error={!!errors.fname}
            id="fname"
            type="text"
            name="fname"
            label="fname"
            placeholder="Enter your fname"
            helperText={errors.fname && errors.fname}
            variant="outlined"
            value={values.fname}
            onChange={handleChange}
          />
          <TextField
            error={!!errors.lname}
            id="lname"
            type="text"
            name="lname"
            label="lname"
            placeholder="Enter your lname"
            helperText={errors.lname && errors.lname}
            variant="outlined"
            value={values.lname}
            onChange={handleChange}
          />
          <TextField
            error={!!errors.email}
            id="email"
            type="text"
            name="email"
            label="email"
            placeholder="Enter your email"
            helperText={errors.email && errors.email}
            variant="outlined"
            value={values.email}
            onChange={handleChange}
          />
          <TextField
            error={!!errors.password}
            id="password"
            type="text"
            name="password"
            label="password"
            placeholder="Enter your password"
            helperText={errors.password && errors.password}
            variant="outlined"
            value={values.password}
            onChange={handleChange}
          />
          <Button color="primary" variant="contained" type="submit">
            Sign Up
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Signup;
