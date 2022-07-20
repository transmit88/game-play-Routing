import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";

import * as gameService from './services/gameService';

import Catalog from './componnents/Catalog/Catalog';
import CreateGame from './componnents/CreateGame/CreateGame';
import Header from './componnents/Header/Header';
import Home from './componnents/Home/Home';
import Login from './componnents/Login/Login';
import Register from './componnents/Register/Register';

import './App.css';
import GameDetails from './componnents/GameDetails/GameDetails';

function App() {
    const [games, setGame] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGame(result);
            });
    }, []);

    return (
        <div id="box">

            <Header />

            {/* Main Content */}
            <main id="main-content">
                <Routes>

                    <Route path='/' element={<Home games={games} />} ></Route>
                    <Route path='/login' element={<Login />} ></Route>
                    <Route path='/register' element={<Register />} ></Route>
                    <Route path='/create' element={<CreateGame />} ></Route>
                    <Route path='/catalog' element={<Catalog games={games} />} ></Route>
                    <Route path='/catalog/:gameId' element={<GameDetails />} ></Route>
                </Routes>


            </main>
            {/*Home Page*/}


        </div>

    );
}

export default App;
