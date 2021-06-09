import {
  makeStyles,
  createStyles,
  Theme,
  Divider,
  Box,
  Typography,
  Grid,
  Link,
  Button,
  IconButton,
} from "@material-ui/core";

// ******************************* icons and images ****************************
import FlagIcon from "@material-ui/icons/Flag";
import TwitterIcon from "@material-ui/icons/Twitter";
import RedditIcon from "@material-ui/icons/Reddit";
import ChatIcon from "@material-ui/icons/Chat";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(0, 1),
      margin: theme.spacing(1, 0),
      backgroundColor: "var(--background-color)",
    },
    heading: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        1.8
      )}px Roboto,sans-serif`,
      color: "var(--dark-greyTwo-color)",
      margin: theme.spacing(4, 0),
    },
    gridItem: {
      display: "flex",
      flexDirection: "column",
    },
    link: {
      textDecoration: "underline",
      "&:not(:last-child)": {
        marginBottom: 2,
      },
    },
    btn: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        1.8
      )}px Roboto,sans-serif`,
      padding: theme.spacing(1, 1.5),
    },
  })
);

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Divider />
      <Box
        width="75%"
        mx="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h6" className={classes.heading}>
          © 2021 Blue Sunday Limited
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
            {[
              "About",
              "Terms of service",
              "Fees",
              "Contact us",
              "Law Enforcement Inquiries",
            ].map((item: any, index: number) => (
              <Link className={classes.link} key={index}>
                {item}
              </Link>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
            {["Security bounty", "Affiliate", "Statistics", "API docs"].map(
              (item: any, index: number) => (
                <Link className={classes.link} key={index}>
                  {item}
                </Link>
              )
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
            {[
              "LocalBitcoins Alternative",
              "Monero News",
              "Knowledge",
              "Monero Block Explorer",
            ].map((item: any, index: number) => (
              <Link className={classes.link} key={index}>
                {item}
              </Link>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
            {["Tor hidden service", "I2P", "B32 I2P", "AgoraDesk"].map(
              (item: any, index: number) => (
                <Link className={classes.link} key={index}>
                  {item}
                </Link>
              )
            )}
          </Grid>
        </Grid>
        <Box display="flex" flexDirection="column" alignItems="center" my={2}>
          <Button
            startIcon={<FlagIcon />}
            className={classes.btn}
            color="primary"
          >
            change language
          </Button>
          <Box>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <RedditIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <WhatsAppIcon />
            </IconButton>
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
