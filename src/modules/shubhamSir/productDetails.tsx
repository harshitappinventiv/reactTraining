import { useState, useEffect } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Box,
  Typography,
  Grid,
  Link,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import dataArray from "./fakeData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);

function ProductDetails() {
  const classes = useStyles();
  const { id }: any = useParams();
  const [productDetails] = useState(dataArray);
  const [filterProduct, setFilterProduct] = useState<typeof productDetails>();

  useEffect(() => {
    setFilterProduct(productDetails.filter((item) => item.id === Number(id)));
  }, [productDetails, id]);

  return (
    <Box pb={8} className={classes.root}>
      <Typography variant="h2" gutterBottom color="secondary">
        Product details
      </Typography>
      {filterProduct &&
        filterProduct.length > 0 &&
        filterProduct.map((item) => (
          <Grid container key={item.id}>
            <Grid item xs={12} sm={6}>
              <img src={item.img} alt={item.name} style={{ width: "95%" }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <Typography variant="h4" gutterBottom>
                  {item.name}
                </Typography>
                <Link>{item.store}</Link>
              </Box>
              <Box my={1}>
                <Typography variant="body2">MRP:₹ {item.mrp}</Typography>
                <Typography variant="body2">Price:₹ {item.price}</Typography>
                <Typography variant="body2">
                  You Save:₹{" "}
                  <span style={{ color: "red" }}>
                    {Number(item.mrp) - Number(item.price)}
                  </span>
                </Typography>
                <Link>Inclusive of all taxes</Link>
              </Box>
              <Box my={1}>
                <Typography variant="body2" color="secondary">
                  {item.available}
                </Typography>
                <Typography variant="body2" style={{ color: "grey" }}>
                  {item.deliveryType}
                </Typography>
                <Typography variant="body1">{item.details}</Typography>
              </Box>
              <Box my={1}>
                <Typography variant="h5" gutterBottom>
                  About this item
                </Typography>
                <ul>
                  {[
                    "Processor: 10th Gen Intel Core i5-10300H Processor, 2.5 GHz (8MB Cache, up to 4.5 GHz, 4 Cores, 8 Threads)",
                    "Access to over 100 high-quality PC games on Windows 10",
                    "One-month subscription to Xbox Game Pass that’s included with the purchase of your device",
                    "Operating System: Pre-loaded Windows 10 Home with lifetime validity",
                    "Memory & Storage: 8GB DDR4 2933MHz RAM, Upgradeable up to 32GB using 2x SO-DIMM Slot| Storage: 512GB M.2 NVMe PCIe 3.0 SSD with empty 1x 2.5-inch SATA Slot for Storage Expansion",
                    "Graphics: Dedicated NVIDIA GeForce GTX 1650 GDDR6 4GB VRAM",
                    "Display: 15.6-inch (16:9) LED-backlit FHD (1920x1080) 144Hz Refresh Rate, Anti-Glare IPS-level Panel with 45% NTSC",
                    "Design & battery: NanoEdge bezels | Stealthy and Sleek Fortress Gray Chassis | Laptop Weight: 2.30 Kg | 48WHrs, 3-cell Lithium-Polymer Battery",
                    "Other: One-Zone RGB backlighting Keyboard | Intel Wi-Fi 6(Gig+)(802.11ax) 2*2 | Bluetooth 5.1 | HD 720p CMOS module Web Camera | Tested and certified to meet military-grade MIL-STD-810H standards",
                    "Warranty: This genuine Asus laptop comes with 1 year manufacturer warranty on the device and 6 months manufacturer warranty on included accessories from the date of purchase. For product related queries contact the brand at contact_us on: [ 18002090365 ] or Email us at : rc_india@asus.com",
                  ].map((i, index) => (
                    <li key={index}>
                      <Typography variant="body2">{i}</Typography>
                    </li>
                  ))}
                </ul>
              </Box>
            </Grid>
          </Grid>
        ))}
    </Box>
  );
}

export default ProductDetails;
