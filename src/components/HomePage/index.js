import React, { Fragment, useContext } from 'react';
import Banners from "./../../assets/image/league-legends.jpg"
import { Grid, Typography } from '@material-ui/core';
import { HomeGamesContext } from "./../../contexts/HomeGamesContext";
import HomeResults from './HomeResults';

const HomePage = () => {

  const {
    doneFetch,
    games,
  } = useContext(HomeGamesContext);

  return (
    <Fragment>
      <div className='grid-home'>
        <Grid container justify="center" item xs={12}>
          <a href='/games/details/286'><img className='banner-p' src={Banners} alt="League Legends"></img></a>
        </Grid>

        <Grid container justify="center" item xs={12}>
          <Typography gutterBottom variant="h3" component="h1">
            ¡Encuentra los mejores juegos gratuitos!
          </Typography>
        </Grid>
        {
          doneFetch ? (
            games.length ?
              <HomeResults
                games={games}
              />
              : "Sin resultado"
          )
            : "Cargando....."
        }
      </div>
    </Fragment>
  )
}

export default HomePage