import { makeStyles, createStyles, Theme, Typography } from "@material-ui/core";
import Tools from "./tools";

// ******************************* images ****************************
import LocalsImage from "../../utils/images";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#b8b8d42e",
    },
    container: {
      maxWidth: "840px",
      margin: theme.spacing(0, "auto"),
      padding: theme.spacing(4, 0),
    },
    header: {},
    insideHeaderDiv: {
      background: `url(${LocalsImage.MAIN_HEADER}) no-repeat `,
      paddingLeft: theme.spacing(4),
      width: "100%",
      height: 265,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      borderTopLeftRadius: theme.spacing(3),
      borderTopRightRadius: theme.spacing(3),
    },
    heading: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        4.5
      )}px Ubuntu, sans-serif`,
      color: "#3498db",
    },
    subheading: {
      font: `normal 200 ${theme.spacing(4.5)}px Ubuntu, sans-serif`,
      color: "var(--white)",
    },
  })
);

// ******************************* create function data ****************************
function createData(
  change: boolean,
  img: string,
  heading: string,
  subheading: string
) {
  return {
    change,
    img,
    heading,
    subheading,
  };
}

const data = [
  createData(
    false,
    LocalsImage.TOOL_ONE,
    "1) React Developer Tools",
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,voluptatum. Est commodi quod rem ex deserunt ad accusantium provident animi?"
  ),
  createData(
    true,
    LocalsImage.TOOL_TWO,
    "2) Create React App ",
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,voluptatum. Est commodi quod rem ex deserunt ad accusantium provident animi?"
  ),
  createData(
    false,
    LocalsImage.TOOL_ONE,
    "3) Storybook",
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,voluptatum. Est commodi quod rem ex deserunt ad accusantium provident animi?"
  ),
  createData(
    true,
    LocalsImage.TOOL_TWO,
    "4) React Styleguide ",
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,voluptatum. Est commodi quod rem ex deserunt ad accusantium provident animi?"
  ),
  createData(
    false,
    LocalsImage.TOOL_ONE,
    "1) React Router Dom",
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,voluptatum. Est commodi quod rem ex deserunt ad accusantium provident animi?"
  ),
];

function AssigmentTwo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <section className={classes.header}>
          <div className={classes.insideHeaderDiv}>
            <Typography variant="h1" className={classes.heading}>
              9 React <br /> Developer Tools
            </Typography>
            <Typography variant="h1" className={classes.subheading}>
              to Create Better <br /> Apps Faster
            </Typography>
          </div>
        </section>
        <Tools data={data} />
      </div>
    </div>
  );
}

export default AssigmentTwo;
