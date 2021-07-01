import { useState } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Drawer,
  Typography,
  List,
  ListItem,
  Checkbox,
  Collapse,
} from "@material-ui/core";

//  ******************************* Icons*
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const drawerWidth = 250;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      zIndex: -1,
    },
    drawerPaper: {
      width: drawerWidth,
      overflow: "visible",
      backgroundColor: "var(--background-color)",
      paddingLeft: theme.spacing(1.5),
    },
    drawerDiv: {
      marginTop: theme.spacing(11),
    },
    hideAndShowdDiv: {
      position: "relative",
    },
    hideAndShowBtn: {
      position: "absolute",
      color: "var(--grey)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      padding: theme.spacing(0.4, 1.2),
      border: "1px solid var(--grey)",
      borderRadius: theme.spacing(3),
      backgroundColor: "var(--white)",
      right: -24,
    },
    heading: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        1.7
      )}px Ubuntu, sans-serif`,
      color: "var(--primary-color)",
      marginTop: theme.spacing(1),
    },
    checkbox: {
      padding: 0,
    },
    listTextItem: {
      font: `normal ${theme.typography.fontWeightRegular} ${theme.spacing(
        2
      )}px Ubuntu, sans-serif`,
      marginLeft: theme.spacing(1.5),
    },
    listItemHeadingDiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  })
);

function Slidebar() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [lillieOpen, setLillieOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLillieClick = () => {
    setLillieOpen(!lillieOpen);
  };

  return (
    <>
      <Drawer
        className={classes.drawer}
        open={open}
        variant="persistent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerDiv}>
          <div className={classes.hideAndShowdDiv}>
            {open ? (
              <div
                className={classes.hideAndShowBtn}
                onClick={handleDrawerClose}
              >
                <ChevronLeftIcon />
                <Typography>Hide</Typography>
              </div>
            ) : (
              <div
                className={classes.hideAndShowBtn}
                onClick={handleDrawerOpen}
              >
                <ChevronRightIcon />
                <Typography>Show</Typography>
              </div>
            )}
          </div>
        </div>

        <div>
          <Typography variant="body1" className={classes.heading}>
            VIEW
          </Typography>
          <List>
            {["Shifts", "Absences", "Events"].map((item, index) => (
              <ListItem key={index} disableGutters>
                <Checkbox className={classes.checkbox} color="primary" />
                <Typography variant="body1" className={classes.listTextItem}>
                  {item}
                </Typography>
              </ListItem>
            ))}
          </List>
        </div>
        <div>
          <Typography variant="body1" className={classes.heading}>
            LOACTION & TEAM
          </Typography>
          <List>
            <ListItem
              onClick={handleLillieClick}
              disableGutters
              button
              className={classes.listItemHeadingDiv}
            >
              <Typography variant="body1">Lilli's Cafe</Typography>
              {lillieOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={lillieOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem disableGutters>
                  <Typography variant="body1">Lilli's Cafe one</Typography>
                </ListItem>
              </List>
            </Collapse>
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default Slidebar;
