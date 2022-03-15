import React, { Fragment, useContext } from 'react';
import { GamesContext } from "./../../contexts/GamesContext";
import GameResults from "./GameResults";
import { Button, styled, Grid } from '@material-ui/core';
import SearchGames from './SearchGames';
import PaginationGames from "./PaginationGames";
import Loader from '../common/Loader';

const MyButton = styled(Button)({
  border: 0,
  borderRadius: 3,
  height: 25,
  padding: '0 20px',
  margin: '0 0.5rem',
  background: '#4799eb',
  color: 'white'
});

const GamesResults = () => {
  const {
    doneFetch,
    games,
    setCatagory,
    searchGames,
    itemIni,
    setItemIni,
    itemEnd,
    setItemEnd,
    pagAct,
    setPagAct
  } = useContext(GamesContext);

  const updateCategory = (term) => {
    setCatagory(term);
  }
  return (
    <Fragment>
      <Grid container alignItems="center">
      <Grid item xs={12} sm={6}>
          <MyButton onClick={() => updateCategory("sports")} variant="contained" className='button-nav'>Sports</MyButton>
          <MyButton onClick={() => updateCategory("fantasy")} variant="contained" className='button-nav'>Fantasy</MyButton>
          <MyButton onClick={() => updateCategory("anime")} variant="contained" className='button-nav'>Anime</MyButton>
          <MyButton onClick={() => updateCategory("")} variant="contained" className='button-nav'>All Game</MyButton>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SearchGames
            searchGames={searchGames}
          />
        </Grid>
      </Grid>
      {
        doneFetch ? (
          games.length ?
            <GameResults
              games={games}
              itemIni={itemIni}
              itemEnd={itemEnd}
            />
            : "Sin resultado"
        )
          : <Loader />
      }
      <PaginationGames
        pagAct={pagAct}
        setItemIni={setItemIni}
        setItemEnd={setItemEnd}
        setPagAct={setPagAct}
        totalItem={games.length}
      />
    </Fragment>
  )
}

export default GamesResults