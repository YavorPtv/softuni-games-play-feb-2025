import { Routes, Route } from 'react-router';

import { UserProvider } from './providers/UserProvider.jsx';

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
import AuthGuard from './components/guards/AuthGuard.jsx';
import GuestGuard from './components/guards/GuestGuard.jsx';

function App() {
    return (
        <UserProvider>
            <div id="box">
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/games" element={<GameCatalog />} />
                        <Route path="/games/:gameId/details" element={<GameDetails />} />
                        <Route element={<AuthGuard />} >
                            <Route path="/games/create" element={<GameCreate />} />
                            <Route path="/games/:gameId/edit" element={<GameEdit />} />
                            <Route path="/logout" element={<Logout />} />
                        </Route>
                        <Route element={ <GuestGuard/> } >
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Route>
                    </Routes>
                </main>
            </div>
        </UserProvider>
    );
}

export default App;
