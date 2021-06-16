import { useState } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Box,
  Typography,
  Button,
  Paper,
  IconButton,
  InputBase,
} from "@material-ui/core";

// ******************************* components *******************************
import FormAdd from "./formAdd";
import UserTable from "./userTable";

// ******************************* icons and images ****************************
import SearchIcon from "@material-ui/icons/Search";

interface UserSchema {
  id: number;
  username: string;
  gmail: string;
  degree: string;
  hobbie: string;
}

// create data *******
function createData(
  id: number,
  username: string,
  gmail: string,
  degree: string,
  hobbie: string
) {
  return {
    id,
    username,
    gmail,
    degree,
    hobbie,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainPage: {
      backgroundImage: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
    },
    root: {
      maxWidth: "1000px",
      margin: theme.spacing(0, "auto"),
      minHeight: "100vh",
    },
    searchBox: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400,
    },
    input: {
      marginRight: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  })
);

function VivekSir() {
  const allUserData = [
    createData(1, "Harshit gupta", "harshit@gmail.com", "BSc", "Cricket"),
    createData(2, "Jhon", "jhon@gmail.com", "Bcom", "football"),
  ];
  const initialFormState = {
    id: null,
    username: "",
    gmail: "",
    degree: "",
    hobbie: "",
  };
  const classes = useStyles();
  const [userData, setUserData] = useState(allUserData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteUser = (id: any) => {
    setEditing(false);
    setUserData(userData.filter((user) => user.id !== id));
  };

  const editRow = (user: any) => {
    setEditing(true);
    setCurrentUser(user);
  };

  function submitForm() {
    console.log("return");
  }

  return (
    <div className={classes.mainPage}>
      <Box className={classes.root} pt={5}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h4" color="primary">
            Harshit
          </Typography>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Add
          </Button>
        </Box>
        <Box my={2}>
          <Paper component="form" className={classes.searchBox}>
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
            <InputBase
              className={classes.input}
              placeholder="Search by name, gmail"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Paper>
        </Box>
        <FormAdd
          submitForm={submitForm}
          open={open}
          handleClose={handleClose}
        />
        <UserTable
          userData={userData}
          editRow={editRow}
          deleteUser={deleteUser}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      </Box>
    </div>
  );
}

export default VivekSir;
