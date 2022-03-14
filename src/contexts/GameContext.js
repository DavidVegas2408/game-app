import React, { createContext, useEffect } from 'react';
import useGetGame from '../hooks/useGetGame';

export const GameContext = createContext();

const GameContextProvider = ({ children }) => {
    const commongame_id = window.location.pathname.split("/")[3];

    const { doneFetchGame, getGameData, game } = useGetGame();

    useEffect(() => {
        getGameData(commongame_id);
    }, [commongame_id])

    return (
        <GameContext.Provider value={{ doneFetchGame, game }}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContextProvider