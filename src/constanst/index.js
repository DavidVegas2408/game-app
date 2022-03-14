const base_url = "https://free-to-play-games-database.p.rapidapi.com/api";

// endpoint - API
export const getList = () => `${base_url}/games`;

export const getListforTerm = (valueTerm) => `${base_url}/games?category=${valueTerm}`;

export const getDetailGame = (id) => `${base_url}/game?id=${id}`;

export const getListFilter = (platform, category) => `${base_url}/games?platform=${platform}&category=${category}&sort-by=release-date`;
