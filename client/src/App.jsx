import { Routes, Route } from 'react-router';

import './App.css';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import GameCatalogue from './components/game-catalogue/GameCatalogue.jsx';
import GameCreate from './components/game-create/GameCreate.jsx';

function App() {
    return (
        <div id="box">
            <Header />
            <main id="main-content">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/games" element={<GameCatalogue />} />
                    <Route path="/games/create" element={<GameCreate />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
