import { useState } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  AppBar,
  Toolbar,
  Avatar,
  List,
  ListItem,
  ListItemText,
  IconButton,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";

// *********************************** icons ********************************
import FireplaceIcon from "@material-ui/icons/Fireplace";
import Selector from "./components/selector";

// Icon ********************************
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: "var(--white)",
      color: "var(--dark-blue-color)",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logoDiv: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    logoIcon: {
      backgroundColor: "var(--primary-color)",
      padding: theme.spacing(1.8),
      cursor: "pointer",
    },
    avatarDiv: {
      margin: theme.spacing(0, 2),
    },
    navList: {
      display: "flex",
      padding: theme.spacing(0),
      marginLeft: theme.spacing(2),
      "& .MuiListItem-root": {
        padding: theme.spacing(2),
        cursor: "pointer",
        "&:nth-child(2)": {
          borderBottom: "3px solid var(--primary-color)",
          "& .MuiTypography-body1": {
            color: "var(--primary-color)",
          },
        },
      },
    },
    avatarSelectorDiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    formControl: {
      marginRight: theme.spacing(2),
      "& .MuiInput-underline": {
        borderBottom: "none",
        "&:before": {
          borderBottom: "none",
        },
        "&:after": {
          borderBottom: "none",
        },
        "&:hover": {
          borderBottom: "none",
        },
        "&:hover:not(.Mui-disabled)": {
          "&:before": {
            borderBottom: "none",
          },
        },
        "& .MuiSelect-select": {
          color: "grey",
        },
      },
    },
  })
);

const createFakeData = (id: number, value: string, title: string) => {
  return { id, value, title };
};

const createMenuList = [
  createFakeData(1, "cafe", "Cafe Lovers"),
  createFakeData(2, "burger", "Burger Lovers"),
];

function Header() {
  const classes = useStyles();
  const [profileList, setProfileList] = useState("cafe");
  const [userList, setUserList] = useState("anton");
  const [menuList] = useState(createMenuList);

  const handleProfileChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setProfileList(e.target.value as string);
  };

  const handleUserChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setUserList(e.target.value as string);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar} disableGutters>
        <div className={classes.logoDiv}>
          <div className={classes.logoIcon}>
            <FireplaceIcon fontSize="large" style={{ color: "var(--white)" }} />
          </div>
          <div className={classes.avatarDiv}>
            <Avatar
              alt="Cindy Baker"
              src="https://material-ui.com/static/images/avatar/3.jpg"
            />
          </div>
          <div>
            <Selector
              value={profileList}
              handleChange={handleProfileChange}
              menuList={menuList}
            />
          </div>
          <List component="nav" className={classes.navList}>
            {["Dashboard", "Schedule", "Messanger", "Reports", "Staff"].map(
              (item, index) => (
                <ListItem key={index}>
                  <ListItemText primary={item} />
                </ListItem>
              )
            )}
          </List>
        </div>
        <div className={classes.avatarSelectorDiv}>
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
          <Avatar
            style={{ margin: "0 16px" }}
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <FormControl className={classes.formControl}>
            <Select value={userList} onChange={handleUserChange}>
              {[{ value: "anton", title: "Anton" }].map(
                (item: any, index: number) => (
                  <MenuItem value={item.value} key={index}>
                    {item.title}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
