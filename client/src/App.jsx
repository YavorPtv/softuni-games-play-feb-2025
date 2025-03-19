import { useState } from 'react';
import { Routes, Route } from 'react-router';

import { UserContext } from './contexts/UserContext.js';

import './App.css';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import GameCatalog from './components/game-catalog/GameCatalog.jsx';
import GameCreate from './components/game-create/GameCreate.jsx';
import GameDetails from './components/game-details/GameDetails.jsx';
import GameEdit from './components/game-edit/GameEdit.jsx';
import Logout from './components/logout/Logout.jsx';

function App() {
    const [authData, setAuthData] = useState({});

    const userLoginHandler = (resultData) => {
        setAuthData(resultData);
    };

    const userLogoutHandler = () => {
        setAuthData({});
    };

    return (
        <UserContext.Provider value={{...authData, userLoginHandler, userLogoutHandler}}>
            <div id="box">
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/games" element={<GameCatalog />} />
                        <Route path="/games/create" element={<GameCreate />} />
                        <Route path="/games/:gameId/details" element={<GameDetails />} />
                        <Route path="/games/:gameId/edit" element={<GameEdit />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </main>
            </div>
        </UserContext.Provider>
    );
}

export default App;
