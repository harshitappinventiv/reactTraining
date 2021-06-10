import { makeStyles, createStyles, Theme } from "@material-ui/core";

// ******************************* components *******************************
import BuyCard from "./buyCard";
import PaymentTable from "./paymentTable";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 75,
      padding: theme.spacing(0, 1),
    },
  })
);

// create data fucntion
const crateData = (
  way: string,
  price: string,
  limit: string,
  payment?: any,
  distance?: string,
  location?: string
) => {
  return {
    way,
    price,
    limit,
    payment,
    distance,
    location,
  };
};

const buyMoneroData = [
  crateData(
    "appukuttan (301; 100%)",
    "21355.33 INR",
    "2500.00 - 20000.00 INR",
    {
      transfer: "IMPS Bank Transfer India",
      method: "UPI",
    }
  ),
  crateData(
    "appukuttan (301; 100%)",
    "21355.33 INR",
    "2500.00 - 20000.00 INR",
    {
      transfer: "IMPS Bank Transfer India",
      method: "UPI",
    }
  ),
];

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BuyCard />
      <PaymentTable
        heading="Buy Monero online in India"
        way="Seller"
        payment="Payment method"
        price="Price/XMR"
        limit="Limits"
        // distance="lj"
        // location="fkdsjlj"
        data={buyMoneroData}
      />
    </div>
  );
}

export default Home;
