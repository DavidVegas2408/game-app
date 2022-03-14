import React from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { styled } from '@material-ui/core';

const MyTextField = styled(TextField)({
  background: 'white',
  width: '100%',
  height: '45px'
});

const SearchGames = ({ searchGames }) => (
  <div className="container-search">
    <MyTextField
      id="search_games"
      label="Buscador De Juegos"
      margin="normal"
      variant="outlined"
      onKeyPress={(e) => searchGames(e)}
    />
    <IconButton onClick={(e) => searchGames(e)}>
      <SearchIcon />
    </IconButton>
  </div>
);

export default SearchGames;