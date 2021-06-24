import { Box, Button, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementAsyn } from "./action";

function Counter() {
  const dispatch = useDispatch();
  const { counter } = useSelector((state: any) => state.counterReducer);
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Counter: {counter}
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => dispatch(increment(2))}
      >
        Increment 2
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => dispatch(decrement(4))}
      >
        Decrement 4
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => dispatch(incrementAsyn(3))}
      >
        increment async 3
      </Button>
    </Box>
  );
}

export default Counter;
