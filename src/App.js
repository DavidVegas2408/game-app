import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import GameDetails from './components/GameDetails';
import GamesResults from "./components/GamesResults";
import NotFound from "./components/NotFound";
import GamesContextProvider from "./contexts/GamesContext";
import GameContextProvider from "./contexts/GameContext"
import HomeGamesContextProvider from './contexts/HomeGamesContext';
import Loader from './components/common/Loader';
import { ErrorBoundary } from './ErrorBoundary';
const HomePage = lazy(() => import("./components/HomePage"));


function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomeGamesContextProvider>
              <Suspense fallback={<Loader />} >
                <HomePage />
              </Suspense>
            </HomeGamesContextProvider>
          </Route>
          <Route exact path="/games">
            <GamesContextProvider>
              <GamesResults />
            </GamesContextProvider>
          </Route>
          <Route exact path="/games/details/:game_id">
            <GameContextProvider>
              <GameDetails />
            </GameContextProvider>
          </Route>
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
export default App;
