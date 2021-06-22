import {
  makeStyles,
  createStyles,
  Theme,
  Box,
  Typography,
} from "@material-ui/core";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    heading: {
      textAlign: "center",
    },
  })
);

function ProductDetails() {
  const classes = useStyles();
  const { id }: any = useParams();
  console.log(id);

  return (
    <Box>
      <Typography variant="h6">ProductDetails</Typography>
    </Box>
  );
}

export default ProductDetails;
