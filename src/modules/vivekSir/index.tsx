import { useState, useEffect } from "react";
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
  CircularProgress,
  Backdrop,
} from "@material-ui/core";
import useDebounce from "./useDebounce";

// ******************************* components *******************************
import FormAdd from "./formAdd";
import UserTable from "./userTable";

// ******************************* icons and images ****************************
import SearchIcon from "@material-ui/icons/Search";

export interface UserSchema {
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
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
);

function VivekSir() {
  const allUserData = [
    createData(
      Math.floor(Math.random() * 1000),
      "Harshit gupta",
      "harshit@gmail.com",
      "BSc",
      "Cricket"
    ),
    createData(
      Math.floor(Math.random() * 1000),
      "Jhon",
      "jhon@gmail.com",
      "Bcom",
      "football"
    ),
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
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUserData, setFilteredUserData] = useState<typeof userData>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  //   *? <- !-> debounding hook ********************************
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    //search using filter function and implement debounding

    if (debouncedSearchTerm) {
      setIsSearching(true);
      console.log("debouncedSearchTerm", debouncedSearchTerm);
      setTimeout(() => {
        setFilteredUserData(
          userData.filter((data: UserSchema) =>
            data.username
              .toLowerCase()
              .includes(debouncedSearchTerm.toLowerCase())
          )
        );
        setIsSearching(false);
      }, 2000);
    }
  }, [debouncedSearchTerm, userData]);

  //   console.log(isSearching);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditing(false);
    setCurrentUser(initialFormState);
  };

  // * <-!->  for search handler
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const addUser = (user: UserSchema) => {
    setLoading(true);
    setTimeout(() => {
      user.id = Math.floor(Math.random() * 1000);
      setUserData([...userData, user]);
      setLoading(false);
    }, 2000);
  };

  const updateUser = (id: number, updatedUser: UserSchema) => {
    setLoading(true);
    setTimeout(() => {
      setEditing(false);
      setUserData(
        userData.map((user: UserSchema) =>
          user.id === id ? updatedUser : user
        )
      );
      setLoading(false);
    }, 2000);
  };

  const deleteUser = (id: number) => {
    setLoading(true);
    setTimeout(() => {
      setEditing(false);
      setUserData(userData.filter((user: UserSchema) => user.id !== id));
      setLoading(false);
    }, 2000);
  };

  const editRow = (user: any) => {
    handleOpen();
    setEditing(true);
    setCurrentUser(user);
  };

  function submitForm() {
    //   for some extra work purposes
    // console.log("return");
  }

  return (
    <div className={classes.mainPage}>
      <Box className={classes.root} pt={5}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h4" color="primary">
            Harshit
          </Typography>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Add User
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
              placeholder="Search by name"
              inputProps={{ "aria-label": "search by name" }}
              onChange={handleSearch}
              value={searchTerm}
            />
          </Paper>
        </Box>
        <UserTable
          userData={debouncedSearchTerm ? filteredUserData : userData}
          editRow={editRow}
          deleteUser={deleteUser}
          isSearching={isSearching}
        />
        <FormAdd
          submitForm={submitForm}
          open={open}
          handleClose={handleClose}
          editing={editing}
          setEditing={setEditing}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          updateUser={updateUser}
          addUser={addUser}
        />
      </Box>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default VivekSir;
