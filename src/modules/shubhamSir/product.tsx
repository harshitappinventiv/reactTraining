import { useState } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Box,
  Typography,
  Grid,
} from "@material-ui/core";
import dataArray from "./fakeData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    item: {
      margin: theme.spacing(1.5),
    },
  })
);

function Product() {
  const classes = useStyles();
  const [product, setProduct] = useState(dataArray);
  return (
    <Box>
      <Typography variant="h2" gutterBottom color="secondary">
        Product
      </Typography>
      <Grid container>
        {product.length > 0 &&
          product.map((item) => (
            <>
              <Grid item xs={12} sm={6} md={4} className={classes.item}>
                {item.id}
              </Grid>
            </>
          ))}
      </Grid>
    </Box>
  );
}

export default Product;
