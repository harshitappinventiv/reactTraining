import { useState, useEffect } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Box,
  Typography,
  Grid,
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import api from "./api";
import AddItem from "./addItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      margin: theme.spacing(1, "auto"),
      "& .MuiCardMedia-root": {
        backgroundSize: "contain",
      },
    },
    card: {
      maxWidth: 345,
    },
    media: {
      height: 200,
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
);

function Product() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState<any>([]);

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = () => {
    const endPoint = "api/users/";
    const params = "";

    api.createGetApiCall(
      endPoint,
      params,
      (response: any) => {
        const { data, status } = response;
        if (status === 200) {
          // console.log(data?.data, status);
          setProduct(data?.data);
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  };

  const productAdd = (addProduct: any) => {
    // console.log("call when product is added", addProduct);
    setProduct([...product, addProduct]);
  };

  const handleAdd = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box pb={8}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h2" gutterBottom color="secondary">
            Product
          </Typography>
          <Button variant="contained" color="primary" onClick={handleAdd}>
            Add
          </Button>
        </Box>
        <Grid container>
          {product.length > 0 &&
            product.map((item: any) => (
              <>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  className={classes.item}
                  key={item.id}
                >
                  <Card className={classes.card}>
                    <Link
                      to={{
                        pathname: `/product/${item.id}`,
                        state: item,
                      }}
                    >
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={
                            item.avatar
                              ? item.avatar
                              : "https://reqres.in/img/faces/5-image.jpg"
                          }
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {item.first_name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {item.last_name}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Link>
                    <CardActions>
                      <Button size="small" color="primary">
                        Link
                      </Button>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </>
            ))}
        </Grid>
      </Box>
      <AddItem
        open={open}
        handleClose={handleClose}
        productAdd={productAdd}
        setOpen={setOpen}
      />
    </div>
  );
}

export default Product;
