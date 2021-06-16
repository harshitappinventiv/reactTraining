import { useState, useEffect } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Box,
  Button,
  TextField,
} from "@material-ui/core";

import AddModal from "./addmodal";
import validate from "./validationinfo";

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

const FormAdd = ({ submitForm, open, handleClose }: any) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    id: null,
    username: "",
    gmail: "",
    degree: "",
    hobbie: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: any): void => {
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
      submitForm();
      console.log(values);
    }
  }, [errors]);

  // console.log(values);
  return (
    <AddModal open={open} handleClose={handleClose}>
      <Box>
        <form
          onSubmit={handleSubmit}
          className="form"
          noValidate
          autoComplete="off"
        >
          <Box className={classes.createGrid}>
            <TextField
              error={Boolean(errors.username)}
              id="username"
              type="text"
              name="username"
              label="Username"
              placeholder="Enter your username"
              helperText={errors.username && errors.username}
              variant="outlined"
              value={values.username}
              onChange={handleChange}
            />
            <TextField
              error={Boolean(errors.gmail)}
              id="gmail"
              type="text"
              name="gmail"
              label="Gmail"
              placeholder="Enter your gmail"
              helperText={errors.gmail && errors.gmail}
              variant="outlined"
              value={values.gmail}
              onChange={handleChange}
            />
            <TextField
              error={Boolean(errors.degree)}
              id="degree"
              type="text"
              name="degree"
              label="Degree"
              placeholder="Enter your degree"
              helperText={errors.degree && errors.degree}
              variant="outlined"
              value={values.degree}
              onChange={handleChange}
            />
            <TextField
              error={Boolean(errors.hobbie)}
              id="hobbie"
              type="text"
              name="hobbie"
              label="Hobbie"
              placeholder="Enter your hobbie"
              helperText={errors.hobbie && errors.hobbie}
              variant="outlined"
              value={values.hobbie}
              onChange={handleChange}
            />
            <Button color="secondary" variant="contained" type="submit">
              Add User
            </Button>
          </Box>
        </form>
      </Box>
    </AddModal>
  );
};

export default FormAdd;
