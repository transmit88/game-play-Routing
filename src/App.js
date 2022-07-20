import { Routes, Route } from 'react-router-dom';
import './App.css';
import Catalog from './componnents/Catalog/Catalog';
import CreateGame from './componnents/CreateGame/CreateGame';

import Header from './componnents/Header/Header';
import Home from './componnents/Home/Home';
import Login from './componnents/Login/Login';
import Register from './componnents/Register/Register';

function App() {
    return (
        <div id="box">

            <Header />

            {/* Main Content */}
            <main id="main-content">
                <Routes>
                    
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/register' element={<Register />}></Route>
                    <Route path='/create' element={<CreateGame />}></Route>
                    <Route path='/catalog' element={<Catalog />}></Route>
                </Routes>


            </main>
            {/*Home Page*/}


        </div>

    );
}

export default App;
