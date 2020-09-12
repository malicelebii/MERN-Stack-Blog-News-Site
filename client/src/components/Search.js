import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function Search() {
  const [inputValue, setinputValue] = useState("");

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [visible, setvisible] = useState(false)

  const search = () => {
    setvisible(!visible);
  };

  return (
    <div>
      <IconButton aria-label="search" color="inherit">
        <SearchIcon onClick={search} />
      {visible ?         <SearchBar
          value={inputValue}
          onChange={(newValue) => setinputValue(newValue)}
        /> : null}
      </IconButton>
    </div>
    // <div className={classes.root}>

    // </div>
  );
}

export default Search;
