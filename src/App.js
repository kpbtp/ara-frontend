import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Login from './components/Login'
import AnimeIndex from './pages/AnimeIndex'
import AnimeShow from './pages/AnimeShow'
import MyAnimeList from './pages/MyAnimeList'
import MyAnimeListEdit from './pages/MyAnimeListEdit'
import MyAnimeListShow from './pages/MyAnimeListShow'
import MyAnimeListNew from './pages/MyAnimeListNew'
import NotFound from './pages/NotFound'
import mockUsers from './mockUsers'
import mockAnime from './mockAnime'
import AboutUs from './pages/AboutUs'

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers)
  const [anime, setAnime] = useState(mockAnime)

  return (
    <>
      <BrowserRouter>
        <Header current_user={!currentUser} />
        <Routes>
          <Route path='/' element={<Home /> }/>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/animeindex' element={<AnimeIndex anime={anime} />} />
          <Route path='/animeshow/:id' element={<AnimeShow anime={anime} />} />
          <Route path='/myanimelist' element={<MyAnimeList />} />
          <Route path='/myanimelistedit' element={<MyAnimeListEdit />} />
          <Route path='/myanimelistnew' element={<MyAnimeListNew />} />
          <Route path='/myanimelistshow' element={<MyAnimeListShow />} />
          <Route path='/aboutus' element={<AboutUs />}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
