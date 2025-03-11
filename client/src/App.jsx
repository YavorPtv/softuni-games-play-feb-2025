import { Routes, Route } from 'react-router';

import './App.css';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import GameCatalog from './components/game-catalog/GameCatalog.jsx';
import GameCreate from './components/game-create/GameCreate.jsx';
import GameDetails from './components/game-details/GameDetails.jsx';
import GameEdit from './components/game-edit/GameEdit.jsx';
import { useState } from 'react';

function App() {
    const [email, setEmail] = useState('');

    const userLoginHandler = (email) => {
        setEmail(email);
    };

    return (
        <div id="box">
            <Header />
            <main id="main-content">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/games" element={<GameCatalog />} />
                    <Route path="/games/create" element={<GameCreate />} />
                    <Route path="/games/:gameId/details" element={<GameDetails email={email}/>} />
                    <Route path="/games/:gameId/edit" element={<GameEdit />} />
                    <Route path="/login" element={<Login onLogin={userLoginHandler}/>} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
