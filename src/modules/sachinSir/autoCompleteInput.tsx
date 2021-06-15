import { makeStyles, createStyles, Theme, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useHistory } from "react-router-dom";

type AppProps = {
  options: string[];
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);

function AutoCompleteInput({ options }: AppProps) {
  const classes = useStyles();
  const history = useHistory();

  const onChange = (event: any, newValue: any) => {
    newValue && history.push(`/editScreen/${newValue}`);
  };
  
  return (
    <div className={classes.root}>
      <Autocomplete
        id="autoCompleteInput"
        options={options}
        getOptionLabel={(option: any) => option}
        style={{ width: 300 }}
        onChange={onChange}
        renderInput={(params: any) => (
          <TextField {...params} label="Search here..." variant="outlined" />
        )}
      />
    </div>
  );
}

export default AutoCompleteInput;
