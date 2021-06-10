import {
  makeStyles,
  createStyles,
  Theme,
  IconButton,
  Switch,
  Typography,
  Box,
  Button,
} from "@material-ui/core";

// ******************************* icons and images ****************************
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    appBar: {
      backgroundColor: "var(--white)",
      position: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "64px",
      padding: theme.spacing(0, 2),
      zIndex: theme.zIndex.appBar
    },
    switchButton: {
      borderRadius: "50%",
      padding: 8,
      "& .MuiIconButton-label": {
        flexDirection: "column",
      },
      "& .MuiSwitch-root": {
        "& .MuiSwitch-colorSecondary.Mui-checked": {
          color: theme.palette.secondary.light,
        },
      },
    },
    switchCaption: {
      font: `normal ${theme.typography.fontWeightRegular} ${theme.spacing(
        1.4
      )}px Roboto,sans-serif`,
    },
    signUp: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.4
      )}px Roboto,sans-serif`,
      padding: theme.spacing(1, 1.5),
    },
    login: {
      marginLeft: theme.spacing(2),
    },
  })
);

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box
        position="fixed"
        className={classes.appBar}
        style={{ width: "calc(100% - 62px)" }}
        boxShadow={1}
      >
        <IconButton className={classes.switchButton}>
          <Switch size="small" name="checkedA" checked={true}/>
          <Typography variant="body1" className={classes.switchCaption}>
            on
          </Typography>
        </IconButton>
        <Box>
          <Button
            className={classes.signUp}
            variant="contained"
            color="secondary"
            startIcon={<PersonAddIcon />}
          >
            Sign up free
          </Button>
          <Button
            className={[classes.login, classes.signUp].join(" ")}
            variant="contained"
            color="primary"
            startIcon={<LockOpenIcon />}
          >
            log in
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Header;
