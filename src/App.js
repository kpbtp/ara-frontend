import { useEffect, useState } from 'react'
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
import AboutUs from './pages/AboutUs'


// import Navigation from './components/Navigation'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [anime, setAnime] = useState([])
  const [myanimelist, setMyAnimeList] = useState()

  const [selectedAnimeIds, setSelectedAnimeIds] = useState("")

  const addToMyAnimeList = (anime) => {
    setMyAnimeList((prevList) => [...prevList, anime])
  }

  useEffect(() => {
    readAnime() && readMyAnimeList()
  }, [])

  const url = "https://ara-backend.onrender.com"

  const readAnime = () => {
    fetch(`${url}/animes`)
      .then((response) => response.json())
      .then((payload) => {
        setAnime(payload)
      })
      .catch((error) => console.log("Anime read errors", error))
  }

  const readMyAnimeList = () => {
    fetch(`${url}/myanimeslist`)
      .then((response) => response.json())
      .then((payload) => {
        setAnime(payload)
      })
      .catch((error) => console.log("Anime read errors", error))
  }

  const createMyAnimeList = (createdMyAnimeList) => {
    fetch(`${url}/myanimelist`, {
      body: JSON.stringify(createdMyAnimeList),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => readMyAnimeList())
      .catch((error) => console.log("Create my anime list error:", error))
  }

  const updateMyAnimeList = (selectedMyAnimeList) => {
    fetch(`${url}/myanimelist/${selectedMyAnimeList.id}`, {
      body: JSON.stringify(selectedMyAnimeList),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => readMyAnimeList())
      .catch((error) => console.log("Updated my anime list:", error))
  }

  // authentication methods
  const login = (userInfo) => {
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        setCurrentUser(payload)
      })
      .catch((error) => console.log("login errors: ", error))
  }

  const signup = (userInfo) => {
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        setCurrentUser(payload)
      })
      .catch((error) => console.log("login errors: ", error))
  }

  const logout = () => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"), //retrieve the token
      },
      method: "DELETE",
    })
      .then((payload) => {
        localStorage.removeItem("token") // remove the token
        setCurrentUser(null)
      })
      .catch((error) => console.log("log out errors: ", error))
  }

  return (
    <>
      <BrowserRouter>
        <Header current_user={currentUser} logout={logout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup signup={signup} />} />
          <Route path="/login" element={<Login login={login} />} />
          <Route path="/animeindex" element={<AnimeIndex anime={anime} current_user={currentUser} />} />
          <Route
            path="/animeshow/:id"
            element={<AnimeShow anime={anime} current_user={currentUser} />}
          />
          <Route
            path="/myanimelist"
            element={<MyAnimeList anime={anime} current_user={currentUser} />}
          />
          <Route path="/myanimelistedit" element={<MyAnimeListEdit />} />
          <Route path="/myanimelistnew" element={<MyAnimeListNew />} />
          <Route
            path="/myanimelistshow/:id"
            element={<MyAnimeListShow anime={anime} />}
          />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
