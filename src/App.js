import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import './App.css';

import * as gameService from './services/gameService';

import Catalog from './componnents/Catalog/Catalog';
import CreateGame from './componnents/CreateGame/CreateGame';
import Header from './componnents/Header/Header';
import Home from './componnents/Home/Home';
import Login from './componnents/Login/Login';
import Register from './componnents/Register/Register';
import GameDetails from './componnents/GameDetails/GameDetails';

function App() {
    const [games, setGames] = useState([]);

    const addComment = (gameId, comment) => {
        setGames(state => {
            const game = state.find(x => x._id == gameId);

            const comments = game.comments || [];
            comments.push(comment)

            return[
                ...state.filter(x => x._id !== gameId),
                {...game, comments},
            ]
        })
    }

    useEffect(() => {
        gameService.getAll()
            .then(result => {
                console.log(result);
                setGames(result);
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
                    <Route path='/catalog/:gameId' element={<GameDetails games={games} addComment={addComment}/>} ></Route>
                </Routes>


            </main>
            {/*Home Page*/}


        </div>

    );
}

export default App;
