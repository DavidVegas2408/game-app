import { useState } from "react";
import { getDetailGame } from "../constanst";

const useGetGame = () => {

    const [doneFetchGame, setDoneFetchGame] = useState(false);
    const [game, setGame] = useState({});

    const getGameData = commongame_id => {
        fetch(getDetailGame(commongame_id), {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": "9aeb0d77c6mshaf413ae0e30807ap17516cjsn21a7d52e12d3"
            }
        })
            .then(res => res.json())
            .then(data => {
                setDoneFetchGame(true);
                setGame(data);
            })
            .catch(err => console.log(err));
    }
    return { doneFetchGame, getGameData, game }
};
export default useGetGame;