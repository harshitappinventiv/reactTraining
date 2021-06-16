import { useState, useEffect } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Box,
  Button,
  TextField,
} from "@material-ui/core";
import { UserSchema } from "./";
import { Errors } from "./validationinfo";

// ******************************* components *******************************
import AddModal from "./addmodal";

import validate from "./validationinfo";

type AppProps = {
  submitForm: () => void;
  open: boolean;
  handleClose: () => void;
  currentUser: UserSchema | any;
  editing: boolean;
  addUser: (user: UserSchema) => void;
  updateUser: (id: number, user: UserSchema) => void;
  setEditing: boolean | any;
  setCurrentUser: UserSchema | any;
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

const FormAdd = ({
  submitForm,
  open,
  handleClose,
  currentUser,
  editing,
  addUser,
  updateUser,
  setEditing,
  setCurrentUser,
}: AppProps) => {
  const initialFormState: any = {
    id: null,
    username: "",
    gmail: "",
    degree: "",
    hobbie: "",
  };

  const classes = useStyles();

  const [values, setValues] = useState(
    editing ? currentUser : initialFormState
  );

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const resetAddUser = () => {
    setEditing(false);
    setValues(initialFormState);
    setCurrentUser(initialFormState);
    handleClose();
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitForm();
      editing ? updateUser(values.id, values) : addUser(values);
      resetAddUser();
      handleClose();
      console.log(values);
    }
  }, [errors]);

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser]);

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
            <Button color="primary" variant="contained" type="submit">
              {editing ? "Update user" : "Add user"}
            </Button>
            {editing && (
              <Button
                onClick={resetAddUser}
                color="secondary"
                variant="contained"
              >
                Cancel
              </Button>
            )}
          </Box>
        </form>
      </Box>
    </AddModal>
  );
};

export default FormAdd;
