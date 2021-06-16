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
  CircularProgress,
} from "@material-ui/core";
import { UserSchema } from "./";

type AppProps = {
  userData: any;
  editRow: (user: UserSchema) => void;
  deleteUser: (id: number) => void;
  isSearching: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1, 0),
    },
  })
);

function UserTable({ userData, editRow, deleteUser, isSearching }: AppProps) {
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
            {isSearching ? (
              <TableRow>
                <TableCell align="center" colSpan={9}>
                  <CircularProgress color="secondary" />
                </TableCell>
              </TableRow>
            ) : (
              <>
                {userData && userData.length > 0 ? (
                  userData.map((user: UserSchema) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.username}</TableCell>
                      <TableCell>{user.gmail}</TableCell>
                      <TableCell>{user.degree}</TableCell>
                      <TableCell>{user.hobbie}</TableCell>
                      <TableCell align="center">
                        <Box>
                          <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => {
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
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UserTable;
