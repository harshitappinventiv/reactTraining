import { useState, useEffect, Fragment } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Typography,
  Box,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Modal,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import EditUserForm from "./editUserForm";

// modal style ********************************

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainPage: {
      backgroundImage: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
    },
    root: {
      maxWidth: "1100px",
      margin: theme.spacing(0, "auto"),
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

function EditScreen() {
  const initialFormState = { id: null, name: "", username: "", email: "" };
  const [apiData, setApiData] = useState(
    JSON.parse(localStorage.getItem("apiData") || "{}")
  );
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [string, setString] = useState("");
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();
  const { params }: any = useParams();

  useEffect(() => {
    setApiData(JSON.parse(localStorage.getItem("apiData") || "{}"));
  }, [params]);

  useEffect(() => {
    localStorage.setItem("apiData", JSON.stringify(apiData));
  }, [apiData]);

  const found: any = apiData.find((item: any) => item[params]);
  const checkDataType: any = found?.[params];

  // * edit function
  const editRow = (userData: any) => {
    setEditing(true);
    setCurrentUser(userData);
  };

  const updateUser = (id: any, updatedUser: any) => {
    setEditing(false);
    // console.log("id", id, params, updatedUser);
    setApiData(
      apiData.map((user: any) =>
        user[params]?.id === id ? { [params]: updatedUser } : user
      )
    );
  };

  const handleClose = () => {
    setEditing(false);
  };

  // ******************************* for string  ****************************
  const handleStringChange = (event: any) => {
    setString(event.target.value);
  };

  const resetAddUser = () => {
    setEditing(false);
    setString("");
  };

  const userTable = (userData: any, type: string, edit: any) => {
    const { id, name, username, email } = userData;
    return (
      <>
        {type === "object" ? (
          <Box key={id}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>UserName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{name}</TableCell>
                    <TableCell>{username}</TableCell>
                    <TableCell>{email}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => editRow(userData)}
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        ) : (
          <TableRow key={id}>
            <TableCell>{name}</TableCell>
            <TableCell>{username}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => editRow(userData)}
              >
                Edit
              </Button>
            </TableCell>
          </TableRow>
        )}
      </>
    );
  };

  return (
    <div className={classes.mainPage}>
      <div className={classes.root}>
        <Typography variant="h2" gutterBottom color="primary">
          {params && params}
        </Typography>
        {checkDataType &&
        typeof checkDataType === "object" &&
        Array.isArray(checkDataType) ? (
          <Box>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>UserName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {checkDataType.map((item: any) => (
                    <Fragment key={item.id}>
                      {userTable(item, "array", editRow)}
                    </Fragment>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        ) : typeof checkDataType === "object" ? (
          userTable(checkDataType, "object", editRow)
        ) : typeof checkDataType === "string" ? (
          <Box
            width="50%"
            component={Paper}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={2}
          >
            <Typography variant="h4" gutterBottom color="secondary">
              {checkDataType}
            </Typography>
            <Box>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => editRow(checkDataType)}
              >
                Edit
              </Button>
            </Box>
          </Box>
        ) : (
          ""
        )}
      </div>
      <Modal
        open={editing}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          {typeof currentUser === "string" ? (
            <form
              className={classes.root}
              onSubmit={(event) => {
                event.preventDefault();
                if (!string) return;
                // console.log(string);
                editing && updateUser(params, string);
                resetAddUser();
              }}
            >
              <Box m={1} p={1}>
                <label>String</label>
                <input
                  type="text"
                  name="string"
                  value={string}
                  onChange={handleStringChange}
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
                  {editing ? "Update user" : "Add user"}
                </Button>
                {editing && (
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
          ) : (
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              updateUser={updateUser}
            />
          )}
        </div>
      </Modal>
    </div>
  );
}

export default EditScreen;
