import {
  makeStyles,
  createStyles,
  Theme,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";

type AppProps = {
  value: string | number;
  handleChange: (e: React.ChangeEvent<{ value: unknown }>) => void;
  menuList: object[];
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
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
          borderRight: "1px solid var(--body-color)",
          paddingRight: theme.spacing(6),
        },
        "& .MuiSelect-icon": {
          marginRight: theme.spacing(2),
        },
      },
    },
  })
);
// .MuiInput-underline:hover:not(.Mui-disabled):before
function Selector({ value, handleChange, menuList }: AppProps) {
  const classes = useStyles();

  return (
    <>
      <FormControl className={classes.formControl}>
        <Select value={value} onChange={handleChange}>
          {menuList.map((item: any) => (
            <MenuItem value={item.value} key={item.id}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default Selector;
