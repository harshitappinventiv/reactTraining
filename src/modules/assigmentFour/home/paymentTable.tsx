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
} from "@material-ui/core";

// ******************************* icons and images ****************************

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
    root: { margin: theme.spacing(1, 0, 2) },
    heading: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        3
      )}px Roboto,sans-serif`,
      color: "var(--dark-greyTwo-color)",
    },
    head: {
      "& .MuiTableCell-head": {
        font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
          1.8
        )}px Roboto,sans-serif`,
        color: "var(--dark-greyTwo-color)",
        opacity: 0.9,
      },
    },
    body: {},
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
                  <TableCell>{item.way}</TableCell>
                  {item.payment && (
                    <TableCell>
                      <Typography>{item?.payment?.transfer}</Typography>
                      <Typography>{item?.payment?.method}</Typography>
                    </TableCell>
                  )}
                  {item.distance && <TableCell>{item.distance}</TableCell>}
                  {item.location && <TableCell>{item.location}</TableCell>}
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.limit}</TableCell>
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
              <TableCell align="right" colSpan={4}>
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
