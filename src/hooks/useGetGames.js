import { useState } from "react";
import { getList, getListforTerm } from "../constanst";

const useGetGames = () => {
    const [doneFetch, setDoneFetch] = useState();
    const [games, setGames] = useState([]);
    const [currentSearch, setCurrentSearch] = useState("");
    const [category, setCatagory] = useState("");
    const [itemIni, setItemIni] = useState(0);
    const [itemEnd, setItemEnd] = useState(40);
    const [pagAct, setPagAct] = useState(1);

    const getGamesList = () => {
        fetch(getList(), {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": "9aeb0d77c6mshaf413ae0e30807ap17516cjsn21a7d52e12d3"
            }
        })
            .then(res => res.json())
            .then(data => {
                setDoneFetch(true);
                setGames(data);
            })
            .catch(err => console.log(err));
    }

    const getGamesForTerm = (term, valueTerm) => {
        fetch(getListforTerm(term, valueTerm), {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": "9aeb0d77c6mshaf413ae0e30807ap17516cjsn21a7d52e12d3"
            }
        })
            .then(res => res.json())
            .then(data => {
                setDoneFetch(true);
                setGames(data);
            })
            .catch(err => console.log(err));
    }

    const getsearchGames = (termSearch) => {
        fetch(getList(), {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": "9aeb0d77c6mshaf413ae0e30807ap17516cjsn21a7d52e12d3"
            }
        })
            .then(res => res.json())
            .then(data => {
                setDoneFetch(true);
                const newData = [];
                data.map(element => {
                    const result = element.title.toLowerCase().search(termSearch);
                    if (result >= 0) {
                        newData.push(element);
                    }
                    return newData
                });
                setGames(newData);
            })
            .catch(err => console.log(err));
    }

    return {
        getGamesList,
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
        setPagAct
    }
};
export default useGetGames;