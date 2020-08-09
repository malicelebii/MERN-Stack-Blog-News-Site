import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

function Search() {
  return (
    <div>
      <IconButton aria-label="search" color="inherit">
        <SearchIcon />
      </IconButton>
    </div>
  );
}

export default Search;
