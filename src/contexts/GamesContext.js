import React, { createContext, useEffect } from 'react';
import useGetGames from '../hooks/useGetGames';

export const GamesContext = createContext();

const GamesContextProvider = ({ children }) => {

    const { getGamesList, 
        getGamesForTerm, 
        setCurrentSearch, 
        setDoneFetch, 
        getsearchGames, 
        doneFetch, 
        games, 
        category, 
        currentSearch, 
        itemIni,
        itemEnd,
        pagAct,
        setCatagory,
        setItemIni,
        setItemEnd,
        setPagAct } = useGetGames();

    useEffect(() => {
        category === ""
            ? getGamesList()
            : getGamesForTerm(category)
    }, [category])

    const searchGames = (
        e,
        term_search = document.querySelector("#search_games").value.toLowerCase().trim()
    ) => {
        if (e.type === "keypress" && e.key !== "Enter") return;
        const words = term_search.match(/\w+/g);
        term_search = words && words.join(" ");
        if (term_search && term_search !== currentSearch) {
            setCurrentSearch(term_search);
            setDoneFetch(false);
            getsearchGames(term_search);
        }
    };

    return (
        <GamesContext.Provider value={{ 
            doneFetch, 
            games, 
            category, 
            setCatagory, 
            searchGames, 
            itemIni, 
            setItemIni, 
            itemEnd, 
            setItemEnd, 
            pagAct, 
            setPagAct }}>
            {children}
        </GamesContext.Provider>
    );
}

export default GamesContextProvider;