import { makeStyles, createStyles, Theme } from "@material-ui/core";

// ******************************* components *******************************
import BuyCard from "./buyCard";
import PaymentTable from "./paymentTable";
import Categories from "./categories";
import News from "./news";

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

const sellMoneroData = [
  crateData(
    "sevogasman (17; 100%)",
    "19609.30 INR",
    "10000.00 - 10000.00 INR",
    {
      transfer: "National bank transfer: India.",
      method: "upi ONLY ..NO PERSONAL DET",
    }
  ),
  crateData(
    "sevogasman (17; 100%)",
    "19609.30 INR",
    "10000.00 - 10000.00 INR",
    {
      transfer: "National bank transfer: India.",
      method: "upi ONLY ..NO PERSONAL DET",
    }
  ),
  crateData(
    "sevogasman (17; 100%)",
    "19609.30 INR",
    "10000.00 - 10000.00 INR",
    {
      transfer: "National bank transfer: India.",
      method: "upi ONLY ..NO PERSONAL DET",
    }
  ),
  crateData(
    "sevogasman (17; 100%)",
    "19609.30 INR",
    "10000.00 - 10000.00 INR",
    {
      transfer: "National bank transfer: India.",
      method: "upi ONLY ..NO PERSONAL DET",
    }
  ),
  crateData(
    "sevogasman (17; 100%)",
    "19609.30 INR",
    "10000.00 - 10000.00 INR",
    {
      transfer: "National bank transfer: India.",
      method: "upi ONLY ..NO PERSONAL DET",
    }
  ),
];

const sellMoneroCashData = [
  crateData(
    "sevogasman (17; 100%)",
    "196.30 INR",
    "10000.00 - 10000.00 INR",
    "",
    "215.30 km",
    "Station Rd, Wadgaon, Maharashtra 442301, India"
  ),
  crateData(
    "sevogasman (17; 100%)",
    "196.30 INR",
    "10000.00 - 10000.00 INR",
    "",
    "215.30 km",
    "Station Rd, Wadgaon, Maharashtra 442301, India"
  ),
  crateData(
    "sevogasman (17; 100%)",
    "196.30 INR",
    "10000.00 - 10000.00 INR",
    "",
    "215.30 km",
    "Station Rd, Wadgaon, Maharashtra 442301, India"
  ),
  crateData(
    "sevogasman (17; 100%)",
    "196.30 INR",
    "10000.00 - 10000.00 INR",
    "",
    "215.30 km",
    "Station Rd, Wadgaon, Maharashtra 442301, India"
  ),
  crateData(
    "sevogasman (17; 100%)",
    "196.30 INR",
    "10000.00 - 10000.00 INR",
    "",
    "215.30 km",
    "Station Rd, Wadgaon, Maharashtra 442301, India"
  ),
];

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BuyCard />
      <PaymentTable
        buy
        heading="Buy Monero online in India"
        way="Seller"
        payment="Payment method"
        price="Price/XMR"
        limit="Limits"
        data={buyMoneroData}
      />
      <PaymentTable
        sell
        heading="Sell Monero online in India"
        way="Buyer"
        payment="Payment method"
        price="Price/XMR"
        limit="Limits"
        data={sellMoneroData}
      />
      <PaymentTable
        sell
        heading="Sell Monero for cash in India"
        way="Buyer"
        distance="Distance"
        location="Location"
        price="Price/XMR"
        limit="Limits"
        data={sellMoneroCashData}
      />
      <Categories />
      <News />
    </div>
  );
}

export default Home;
