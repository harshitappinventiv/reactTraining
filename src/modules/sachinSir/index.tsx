import { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import axios from "axios";

// * * * * * * * * * * component * * * * * * *
import AutoCompleteInput from "./autoCompleteInput";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainPage: {
      backgroundImage: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
    },
    root: {
      maxWidth: "1100px",
      margin: theme.spacing(0, "auto"),
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
  })
);

const URL = "https://mocki.io/v1/a1acd142-26fd-4a32-8b13-0062ce45c159";

function SachinSir() {
  const classes = useStyles();
  const [apiData, setApiData] = useState<any>([]);
  const [options, setOption] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("apiData")) {
      getData();
    }
    if (apiData.length > 0) {
      localStorage.setItem("apiData", JSON.stringify(apiData));
    }
  }, [apiData]);

  useEffect(() => {
    if (localStorage.getItem("apiData")) {
      const option = JSON.parse(localStorage.getItem("apiData") || "{}");
      const keys = option.map((item: any) => Object.keys(item)).flat();
      setOption(keys);
    }
  }, [apiData]);

  const getData = async () => {
    try {
      const response = await axios.get(URL);
      if (response.status === 200) {
        setApiData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.mainPage}>
      <div className={classes.root}>
        {options.length > 0 && <AutoCompleteInput options={options} />}
      </div>
    </div>
  );
}

export default SachinSir;
