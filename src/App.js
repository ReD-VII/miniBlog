import React from 'react';
import './styles/App.css';

// ROTAS
import { BrowserRouter, Routes, Route} from "react-router-dom"

// PAGINAS
import Home from './pages/Home/index'
import NotFound from './pages/NotFound/index'
import Profile from './pages/Profile/index'
import Likes from './pages/Likes/index'
import Search from './pages/Search/index'
import Aboult from './pages/Aboult/index'
import Login from './pages/Login';
import Register from './pages/Register';

// Layout
import Layout from './layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='profile' element={<Profile />} />
              <Route path='likes' element={<Likes />} />
              <Route path='search' element={<Search />} />
              <Route path='aboult' element={<Aboult />} />
              <Route path='*' element={<NotFound />} />
            </Route>
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
