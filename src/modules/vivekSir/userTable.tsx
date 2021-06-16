import {
  makeStyles,
  createStyles,
  Theme,
  Paper,
  Box,
  TableContainer,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Button,
} from "@material-ui/core";

type AppProps = {
  userData: any;
  editRow: any;
  deleteUser: any;
  handleClose: any;
  handleOpen: any;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);

function UserTable({
  userData,
  editRow,
  deleteUser,
  handleClose,
  handleOpen,
}: AppProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Gmail</TableCell>
              <TableCell>Degree</TableCell>
              <TableCell>Hobbie</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.length > 0 ? (
              userData.map((user: any) => (
                <TableRow key={user.id}>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.gmail}</TableCell>
                  <TableCell>{user.degree}</TableCell>
                  <TableCell>{user.hobbie}</TableCell>
                  <TableCell>
                    <Box>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => {
                          handleOpen();
                          editRow(user);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        color="secondary"
                        style={{ marginLeft: "20px" }}
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={9} align="center">
                  no records
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UserTable;
