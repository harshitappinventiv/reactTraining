import {
  makeStyles,
  createStyles,
  Theme,
  Box,
  Typography,
  Button,
  IconButton,
  Divider,
} from "@material-ui/core";

//  ******************************* icons ****************************
import AddIcon from "@material-ui/icons/Add";
import VpnLockIcon from "@material-ui/icons/VpnLock";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    heading: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        2.2
      )}px Roboto,sans-serif`,
      color: "var(--dark-greyTwo-color)",
    },
    btn: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.4
      )}px Roboto,sans-serif`,
      padding: theme.spacing(1, 1.5),
      margin: theme.spacing(0, 0.5),
    },
    subheading: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        2
      )}px Roboto,sans-serif`,
      color: theme.palette.secondary.main,
      textDecoration: "underline",
    },
    paragraph: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        2
      )}px Roboto,sans-serif`,
      color: "var(--dark-greyTwo-color)",
    },
    changeBtn: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.6
      )}px Roboto,sans-serif`,
    },
    headingMonero: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        2
      )}px Roboto,sans-serif`,
      color: "var(--dark-greyTwo-color)",
      textAlign: "center",
      marginBottom: theme.spacing(1.5),
    },
    subheadingMonero: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        1.6
      )}px Roboto,sans-serif`,
      color: "var(--dark-greyTwo-color)",
      lineHeight: 1.5,
    },
  })
);

function Categories() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box>
        <Box display="flex" alignItems="center">
          <Typography variant="body1" className={classes.heading}>
            You can be the first one to
          </Typography>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            color="secondary"
            className={classes.btn}
          >
            post an ad
          </Button>
          <Typography variant="body1" className={classes.heading}>
            in the following categories:
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <IconButton color="secondary">
            <AddIcon />
          </IconButton>
          <Typography variant="body1" className={classes.subheading}>
            Buy Monero with cash in India
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="75%"
        mx="auto"
        mt={1}
        mb={2}
      >
        <IconButton>
          <VpnLockIcon />
        </IconButton>
        <Typography variant="body1" className={classes.paragraph}>
          Showing advertisements in{" "}
          <span style={{ fontWeight: "bold" }}>India</span>
        </Typography>
        <Button color="primary" className={classes.changeBtn}>
          change
        </Button>
      </Box>
      <Divider />
      <Box width="75%" mx="auto" mt={2} mb={3}>
        <Box>
          <Typography variant="body1" className={classes.headingMonero}>
            Protect your right to privacy - buy Monero.
          </Typography>
          <Typography variant="body1" className={classes.subheadingMonero}>
            If you are concerned about the invasion of privacy - the best
            cryptocurrency to invest in is XMR. Monero is an untraceable coin
            developed with privacy by design in mind. Where to buy Monero?
            LocalMonero is the biggest, most trusted and well-established P2P
            Monero exchange in the XMR community. We have no KYC checks - you
            can simply buy Monero anonymously without ID verification with
            PayPal, credit card, gift card, cash by mail or convert bitcoin to
            Monero - our platform supports any payment method.
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography
            variant="body1"
            className={classes.headingMonero}
            style={{ textAlign: "left" }}
          >
            Sell Monero to people worldwide or locally - support the community
            and make money with cryptocurrency.
          </Typography>
          <Typography variant="body1" className={classes.subheadingMonero}>
            LocalMonero is the best place to sell XMR - whether it's your mining
            rewards, Monero price arbitrage, or you simply see the value in
            servicing the community. The escrow system and our secure Monero
            wallet provide you with a robust XMR trading experience - so you can
            convert XMR to USD, EUR, AUD, GBP or any other local currency with
            peace of mind.
          </Typography>
        </Box>
      </Box>
      <Divider />
    </div>
  );
}

export default Categories;
