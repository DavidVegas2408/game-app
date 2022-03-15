import React from 'react';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import GameImages from "./GamesImages"

const GameInfo = ({ game }) => {
  return (
    <div className='content-game'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div className='content-left'>
            <div className='image-movie-container'><img src={game.thumbnail} alt={game.title} /></div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className='content-rigth'>
            <Typography gutterBottom variant="h4" component="h1">
              {game.title}
            </Typography>
            <Typography component="h2">
              {game.short_description}
            </Typography>
            <Typography component="p">
              Plataformas: {game.platform}
            </Typography>
            <Typography component="p">
              Genero: {game.genre}
            </Typography>
            <Typography component="p">
              Desarrollado por: {game.developer}
            </Typography>

          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h6" component="p">
            Descripción:
          </Typography>
          <Typography component="p">
            {game.description}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h6" component="p">
            Screenshots:
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {
          game.screenshots.map(el => {
            return (
              <GameImages
                key={el.id}
                image={el.image}
                title={game.title}
              />
            );
          })
        }
      </Grid>

    </div>
  )
}

export default GameInfo