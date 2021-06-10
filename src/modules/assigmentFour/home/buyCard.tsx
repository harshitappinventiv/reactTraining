import {
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Box,
  Paper,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";

// ******************************* icon and image *******************************
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ShopTwoIcon from "@material-ui/icons/ShopTwo";
import FlagIcon from "@material-ui/icons/Flag";
import LanguageIcon from "@material-ui/icons/Language";
import SearchIcon from "@material-ui/icons/Search";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    mainDiv: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridColumnGap: theme.spacing(1.5),
      gridRowGap: theme.spacing(1.5),
    },
    btn: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.6
      )}px Roboto,sans-serif`,
      padding: theme.spacing(1.2, 0),
    },
    sellBtn: {
      color: "var(--dark-greyTwo-color)",
      opacity: 0.6,
    },
    inrSelect: {
      color: "var(--dark-greyTwo-color)",
      "& .MuiSvgIcon-root ": {
        borderLeft: "1px solid var(--dark-greyTwo-color)",
        opacity: 0.6,
      },
      "& .MuiFormLabel-root": {
        color: "var(--black)",
      },
    },
    countrySelect: {
      opacity: 0.7,
    },
    iconSelect: {
      display: "flex",
      alignItems: "center",
      padding: 0,
      "& .MuiSvgIcon-root ": {
        border: "0",
      },
    },
    btnSearch: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.4
      )}px Roboto,sans-serif`,
      padding: theme.spacing(1.2, 0),
      gridColumnStart: 1,
      gridColumnEnd: 3,
    },
    heading: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        4
      )}px Roboto,sans-serif`,
      color: "var(--dark-greyTwo-color)",
      textAlign: "center",
    },
    signUp: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.4
      )}px Roboto,sans-serif`,
      padding: theme.spacing(1.5, 1.5),
      marginTop: theme.spacing(2.1),
    },
  })
);

function BuyCard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <Box component={Paper} p={2} mr={1}>
            <Box className={classes.mainDiv}>
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
                startIcon={
                  <ShoppingCartOutlinedIcon style={{ fontSize: "25px" }} />
                }
              >
                Buy
              </Button>
              <Button
                className={[classes.btn, classes.sellBtn].join(" ")}
                variant="outlined"
                startIcon={<ShopTwoIcon style={{ fontSize: "25px" }} />}
              >
                Sell
              </Button>
              <TextField
                id="outlined-basic"
                label="Amount"
                variant="outlined"
              />
              <FormControl variant="outlined" className={classes.inrSelect}>
                <InputLabel id="demo-simple-select-outlined-label">
                  INR
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="INR"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                variant="outlined"
                className={[classes.inrSelect, classes.countrySelect].join(" ")}
              >
                <InputLabel
                  id="demo-simple-select-outlined-label"
                  className={classes.iconSelect}
                >
                  <FlagIcon style={{ marginRight: "10px" }} /> India
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="INR"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                variant="outlined"
                className={[classes.inrSelect, classes.countrySelect].join(" ")}
              >
                <InputLabel
                  id="demo-simple-select-outlined-label"
                  className={classes.iconSelect}
                >
                  <LanguageIcon
                    style={{
                      marginRight: "10px",
                      color: "#1565c0",
                      opacity: "1",
                    }}
                  />{" "}
                  All online offers
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="INR"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <Button
                className={classes.btnSearch}
                variant="contained"
                color="primary"
                startIcon={<SearchIcon />}
              >
                search
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box
            component={Paper}
            p={2}
            ml={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Typography variant="h6" className={classes.heading}>
              Buy Monero. <br />
              Sell Monero. <br />
              Cash or online. <br />
              Anywhere.
            </Typography>
            <Button
              className={classes.signUp}
              variant="contained"
              color="secondary"
              startIcon={<PersonAddIcon />}
            >
              Sign up free
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default BuyCard;
