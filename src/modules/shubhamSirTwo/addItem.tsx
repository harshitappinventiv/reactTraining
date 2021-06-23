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
import validate, { Errors } from "./validationinfo";
import api from "./api";

// ******************************* components *******************************
import AddModal from "./addmodal";

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

function AddItem({ open, handleClose, productAdd, setOpen }: any) {
  const initialFormState: any = {
    name: "",
    job: "",
  };

  const classes = useStyles();
  const [values, setValues] = useState(initialFormState);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      const endPoint = "api/users";
      setLoading(true);
      api.createPostApiCall(
        endPoint,
        values,
        (response: any) => {
          const { data, status } = response;
          if (status === 201) {
            const addProduct = {
              id: data.id,
              first_name: data.name,
              last_name: data.job,
            };
            productAdd(addProduct);
            setLoading(false);
            setOpen(false);
            // console.log(data);
            setValues(initialFormState);
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }, [errors]);

  return (
    <AddModal open={open} handleClose={handleClose}>
      <Box display="flex" alignItems="center" justifyContent="center">
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
              label="fname"
              placeholder="Enter your fname"
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
              label="lname"
              placeholder="Enter your lname"
              helperText={errors.job && errors.job}
              variant="outlined"
              value={values.job}
              onChange={handleChange}
            />

            <Button color="primary" variant="contained" type="submit">
              {loading ? "Loading..." : "Add"}
            </Button>
          </Box>
        </form>
      </Box>
    </AddModal>
  );
}

export default AddItem;
