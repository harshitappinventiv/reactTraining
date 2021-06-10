import {
  makeStyles,
  createStyles,
  Theme,
  Typography,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  TableFooter,
  Link,
  Box,
  Button,
} from "@material-ui/core";

// ******************************* icons and images ****************************
import SpaIcon from "@material-ui/icons/Spa";
import RoomIcon from "@material-ui/icons/Room";

type AppProps = {
  heading: string;
  way: string;
  payment?: any;
  price: string;
  limit: string;
  distance?: string;
  location?: string;
  buy?: boolean;
  sell?: boolean;
  data: any;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { margin: theme.spacing(1.5, 0, 3) },
    heading: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        3
      )}px Roboto,sans-serif`,
      color: "var(--dark-greyTwo-color)",
      marginBottom: theme.spacing(1),
    },
    head: {
      "& .MuiTableCell-head": {
        font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
          1.6
        )}px Roboto,sans-serif`,
        color: "var(--dark-greyTwo-color)",
        opacity: 0.9,
      },
    },
    body: {
      padding: theme.spacing(1, 2),
    },
    link: {
      font: `normal ${theme.typography.fontWeightRegular} ${theme.spacing(
        1.6
      )}px Roboto,sans-serif`,
      cursor: "pointer",
      textDecoration: "underline",
    },
    linkDot: {
      width: 15,
      height: 15,
      borderRadius: "50%",
      backgroundColor: theme.palette.secondary.light,
      marginLeft: theme.spacing(1),
    },
    paymentTransfer: {
      font: `normal ${theme.typography.fontWeightRegular} ${theme.spacing(
        1.6
      )}px Roboto,sans-serif`,
      color: "var(--dark-grey-color)",
      cursor: "pointer",
    },
    paymentMethod: {
      font: `normal ${theme.typography.fontWeightRegular} ${theme.spacing(
        1.6
      )}px Roboto,sans-serif`,
      cursor: "pointer",
      color: "var(--dark-grey-color)",
      opacity: 0.7,
    },
    price: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        2
      )}px Roboto,sans-serif`,
      color: theme.palette.secondary.main,
      letterSpacing: 1,
    },
    limit: {
      font: `normal ${theme.typography.fontWeightRegular} ${theme.spacing(
        1.6
      )}px Roboto,sans-serif`,
      color: "var(--dark-greyTwo-color)",
      marginRight: theme.spacing(1.5),
    },
    limitBtn: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.6
      )}px Roboto,sans-serif`,
      backgroundColor: "#FFBA1F",
      color: "var(--white)",
      padding: theme.spacing(1, 1),
      "&:hover": {
        backgroundColor: "rgb(178, 130, 21)",
        color: "rgb(255, 255, 255)",
      },
    },
    footer: {
      padding: theme.spacing(1, 0),
    },
    footerHeading: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.6
      )}px Roboto,sans-serif`,
      color: theme.palette.primary.main,
    },
  })
);

function PaymentTable({
  heading,
  way,
  payment,
  price,
  limit,
  distance,
  location,
  data,
  buy,
  sell,
}: AppProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.heading}>
        {heading}
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow className={classes.head}>
              <TableCell>{way}</TableCell>
              {payment && <TableCell>{payment}</TableCell>}
              {distance && <TableCell>{distance}</TableCell>}
              {location && <TableCell>{location}</TableCell>}
              <TableCell>{price}</TableCell>
              <TableCell align="center">{limit}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 ? (
              data.map((item: any, index: number) => (
                <TableRow hover className={classes.body} key={index}>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <Link className={classes.link}>{item.way}</Link>
                      <Box className={classes.linkDot}></Box>
                    </Box>
                  </TableCell>
                  {item.payment && (
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Box>
                          <SpaIcon color="primary" />
                        </Box>
                        <Box ml={1}>
                          <Typography
                            variant="body1"
                            className={classes.paymentTransfer}
                          >
                            {item?.payment?.transfer}
                          </Typography>
                          <Typography
                            variant="body1"
                            className={classes.paymentMethod}
                          >
                            {item?.payment?.method}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                  )}
                  {item.distance && (
                    <TableCell className={classes.limit}>
                      {item.distance}
                    </TableCell>
                  )}
                  {item.location && (
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <RoomIcon color="primary" />
                        <Link className={classes.link}>{item.location}</Link>
                      </Box>
                    </TableCell>
                  )}
                  <TableCell>
                    <Typography variant="body1" className={classes.price}>
                      {item.price}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box mx={"auto"} display="flex" alignItems="center">
                      <Typography variant="body1" className={classes.limit}>
                        {item.limit}
                      </Typography>
                      <Button variant="contained" className={classes.limitBtn}>
                        {buy ? "Buy" : "Sell"}
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow hover className={classes.body}>
                <Typography variant="body1">No data</Typography>
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow className={classes.footer}>
              <TableCell align="right" colSpan={6}>
                <Typography variant="body1" className={classes.footerHeading}>
                  SHOW MORE...
                </Typography>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}

export default PaymentTable;
