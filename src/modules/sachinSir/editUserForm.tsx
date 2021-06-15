import { useState, useEffect } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Box,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);

const EditUserForm = (props: any) => {
  const classes = useStyles();
  const initialFormState = { id: null, name: "", username: "", email: "" };
  const [user, setUser] = useState(
    props.editing ? props.currentUser : initialFormState
  );

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const resetAddUser = () => {
    props.setEditing(false);
    setUser(initialFormState);
    props.setCurrentUser(initialFormState);
  };

  return (
    <form
    className={classes.root}
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username || !user.email) return;
        props.editing && props.updateUser(user.id, user);
        resetAddUser();
      }}
    >
      <Box m={1} p={1}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
      </Box>
      <Box m={1} p={1}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
      </Box>
      <Box m={1} p={1}>
        <label>email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        />
      </Box>
      <Box
        m={1}
        p={1}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Button color="primary" variant="contained" type="submit">
          {props.editing ? "Update user" : "Add user"}
        </Button>
        {props.editing && (
          <Button
            color="secondary"
            variant="contained"
            onClick={resetAddUser}
            className="button muted-button"
          >
            Cancel
          </Button>
        )}
      </Box>
    </form>
  );
};

export default EditUserForm;
