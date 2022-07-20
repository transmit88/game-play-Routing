import { Routes, Route } from 'react-router-dom';

import Header from './componnents/Header/Header';
import Home from './componnents/Home/Home';

import './App.css';

function App() {
    return (
        <div id="box">

            <Header />

            {/* Main Content */}
            <main id="main-content">
                <Routes>
                    
                    <Route path='/' element={<Home />}></Route>
                </Routes>


            </main>
            {/*Home Page*/}


        </div>

    );
}

export default App;
