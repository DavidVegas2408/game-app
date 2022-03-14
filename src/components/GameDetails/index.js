import React, { Fragment, useContext } from 'react';
import { GameContext } from "../../contexts/GameContext";
import GameInfo from "./GameInfo";
import Loader from '../common/Loader';

const GameDetails = () => {
  const { doneFetchGame, game } = useContext(GameContext)

  return (
    <Fragment>
      {
        doneFetchGame ?
          (Object.entries(game).length ? <GameInfo game={game} /> : "Sin resultado")
          : <Loader />
      }
    </Fragment>
  )
}

export default GameDetails