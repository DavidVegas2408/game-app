import React, { createContext, useEffect } from 'react';
import useGetGames from '../hooks/useGetGames';

export const HomeGamesContext = createContext();

const HomeGamesContextProvider = ({ children }) => {

    const { getGamesList,
        doneFetch,
        games,
    } = useGetGames();

    useEffect(() => {
        getGamesList()
    }, [])

    return (
        <HomeGamesContext.Provider value={{ doneFetch, games }}>
            {children}
        </HomeGamesContext.Provider>
    );
}

export default HomeGamesContextProvider;