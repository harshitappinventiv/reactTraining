import {
  makeStyles,
  createStyles,
  withStyles,
  Theme,
  Tooltip,
  List,
  ListItem,
} from "@material-ui/core";

// ******************************* icons and images ****************************
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ShopIcon from "@material-ui/icons/Shop";
import LaunchIcon from "@material-ui/icons/Launch";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import HelpIcon from "@material-ui/icons/Help";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import SaveIcon from "@material-ui/icons/Save";
import CopyrightIcon from "@material-ui/icons/Copyright";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      height: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      width: 62,
    },
    listItem: {
      padding: theme.spacing(1, 1.5),
      cursor: "pointer",
      "&:first-child": {
        backgroundColor: "var(--dark-grey-color)",
        height: 64,
      },
    },
    icon: {
      color: "var(--white)",
      fontSize: theme.spacing(3.2),
    },
  })
);

const LightTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: theme.palette.primary.main,
    color: "var(--white)",
    font: `normal ${theme.typography.fontWeightLight} ${theme.spacing(
      1.8
    )}px Roboto, sans-serif`,
    padding: theme.spacing(1, 1.5),
  },
}))(Tooltip);

function Sidebar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List disablePadding>
        <ListItem className={classes.listItem}>
          <MonetizationOnIcon fontSize="large" className={classes.icon} />
        </ListItem>
        <LightTooltip title="Buy Monero" placement="right">
          <ListItem className={classes.listItem}>
            <ShopIcon fontSize="large" className={classes.icon} />
          </ListItem>
        </LightTooltip>
        <LightTooltip title="Sell Monero" placement="right">
          <ListItem className={classes.listItem}>
            <LaunchIcon fontSize="large" className={classes.icon} />
          </ListItem>
        </LightTooltip>
        <LightTooltip title="Trade BTC and options" placement="right">
          <ListItem className={classes.listItem}>
            <TrendingUpIcon fontSize="large" className={classes.icon} />
          </ListItem>
        </LightTooltip>
        <LightTooltip title="Post an ad" placement="right">
          <ListItem className={classes.listItem}>
            <PlaylistAddIcon fontSize="large" className={classes.icon} />
          </ListItem>
        </LightTooltip>
        <LightTooltip title="Support" placement="right">
          <ListItem className={classes.listItem}>
            <HelpIcon fontSize="large" className={classes.icon} />
          </ListItem>
        </LightTooltip>
        <LightTooltip title="Getting started" placement="right">
          <ListItem className={classes.listItem}>
            <FlightTakeoffIcon fontSize="large" className={classes.icon} />
          </ListItem>
        </LightTooltip>
        <LightTooltip title="Forums" placement="right">
          <ListItem className={classes.listItem}>
            <QuestionAnswerIcon fontSize="large" className={classes.icon} />
          </ListItem>
        </LightTooltip>
        <LightTooltip title="Knowledge" placement="right">
          <ListItem className={classes.listItem}>
            <MenuBookIcon fontSize="large" className={classes.icon} />
          </ListItem>
        </LightTooltip>
        <LightTooltip title="Monero news" placement="right">
          <ListItem className={classes.listItem}>
            <SaveIcon fontSize="large" className={classes.icon} />
          </ListItem>
        </LightTooltip>
        <LightTooltip title="FAQ" placement="right">
          <ListItem className={classes.listItem}>
            <HelpIcon fontSize="large" className={classes.icon} />
          </ListItem>
        </LightTooltip>
        <LightTooltip title="Aboout" placement="right">
          <ListItem className={classes.listItem}>
            <CopyrightIcon fontSize="large" className={classes.icon} />
          </ListItem>
        </LightTooltip>
      </List>
    </div>
  );
}

export default Sidebar;
