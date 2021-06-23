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
import api from "./api";

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
    name: "",
    job: "",
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
      const endPoint = "api/users";

      setLoading(true);
      api.createPostApiCall(
        endPoint,
        values,
        (response: any) => {
          const { data, status } = response;
          if (status === 201) {
            // console.log(data);
            localStorage.setItem("accessToken", id);
            setValues(initialFormState);
            setLoading(false);
            history.push("/product");
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
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
            error={!!errors.name}
            id="name"
            type="text"
            name="name"
            label="name"
            placeholder="Enter your name"
            helperText={errors.name && errors.name}
            variant="outlined"
            value={values.name}
            onChange={handleChange}
          />
          <TextField
            error={!!errors.job}
            id="job"
            type="text"
            name="job"
            label="job"
            placeholder="Enter your job"
            helperText={errors.job && errors.job}
            variant="outlined"
            value={values.job}
            onChange={handleChange}
          />

          <Button color="primary" variant="contained" type="submit">
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Signup;
