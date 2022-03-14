import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import GameCard from './GameCard';


const GameResults = ({ games, itemIni, setItemIni, itemEnd, setItemEnd }) => {

    return (
        <Fragment>
            <div className='grid-games'>
                <Grid container justify="center" spacing={3}>
                    {
                        games.map((game, index) => {
                            const {
                                id,
                                title,
                                platform,
                                short_description,
                                thumbnail
                            } = game;

                            return (index >= itemIni && index < itemEnd) ? <GameCard
                                key={id}
                                id={id}
                                title={title}
                                platform={platform}
                                short_description={short_description}
                                thumbnail={thumbnail}
                            />
                                : ""
                        })
                    }
                </Grid>
            </div>
        </Fragment>
    )
}

export default GameResults
/*
const dataGamesWithPagination = () => {
    const newDataGet = [];
    gamesFull.map((el, index) => {
        if (index < pagEnd) {
            newDataGet.push(el);
        }
        return newDataGet
    })
    setGames(newDataGet);
}*/ 