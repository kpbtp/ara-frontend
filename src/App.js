import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AnimeIndex from "./pages/AnimeIndex";
import AnimeShow from "./pages/AnimeShow";
import MyAnimeList from "./pages/MyAnimeList";
import MyAnimeListEdit from "./pages/MyAnimeListEdit";
import MyAnimeListShow from "./pages/MyAnimeListShow";
import MyAnimeListNew from "./pages/MyAnimeListNew";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import AnimeSearch from "./pages/AnimeSearch";

// import Navigation from './components/Navigation'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [anime, setAnime] = useState([]);
  const [myanimelist, setMyAnimeList] = useState();
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [id, setId] = useState(null);


  const updateId = (number) => {
    setId(number);
  };

  const addToMyAnimeList = (anime) => {
    setMyAnimeList((prevList) => [...prevList, anime]);
  };

  useEffect(() => {
    readAnime() && readMyAnimeList() && createMyAnimeList() && updateMyAnimeList()
  }, []);

  const url = "https://ara-backend.onrender.com";
  const apiUrl = "https://api.jikan.moe/v4/anime";


  const readAnime = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((payload) => {
        setAnime([payload.data]);
      })
      .catch((error) => console.log("Anime read errors", error));
  };


  const readMyAnimeList = () => {
    fetch(`${url}/anime_lists`)
      .then((response) => response.json())
      .then((payload) => {
        setAnime(payload);
      })
      .catch((error) => console.log("Anime read errors", error));
  };

  const createMyAnimeList = (createdMyAnimeList) => {
    fetch(`${url}/anime_lists`, {
      body: JSON.stringify({
        ...createdMyAnimeList,
        user_id: currentUser.id // Associate the current user ID
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => readMyAnimeList())
      .catch((error) => console.log("Create my anime list error:", error));
  };
  
  const updateMyAnimeList = (selectedMyAnimeList) => {
    fetch(`${url}/anime_lists/${selectedMyAnimeList.id}`, {
      body: JSON.stringify(selectedMyAnimeList),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((response) => console.log("patch response: ", response))
      .then(() => readMyAnimeList())
      .catch((error) => console.log("Updated my anime list:", error));
  };

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
        if (!response.ok) {
          throw Error(response.statusText);
        }
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"));
        return response.json();
      })
      .then((payload) => {
        setCurrentUser(payload)
      })
      .catch((error) => console.log("login errors: ", error));
  };

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
        if (!response.ok) {
          throw Error(response.statusText);
        }
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"));
        return response.json();
      })
      .then((payload) => {
        setCurrentUser(payload);
      })
      .catch((error) => console.log("login errors: ", error));
  };

  const logout = () => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"), //retrieve the token
      },
      method: "DELETE",
    })
      .then((payload) => {
        localStorage.removeItem("token"); // remove the token
        setCurrentUser(null);
      })
      .catch((error) => console.log("log out errors: ", error));
  };

  const fetchAnimeIndex = () => {
    setLoading(true);
    fetch(`https://api.jikan.moe/v4/anime?page=${currentPage}&limit=24`)
      .then((response) => response.json())
      .then((data) => {
        setAnimeList(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <BrowserRouter>
        <Header className='bg-lime-700' currentUser={currentUser} logout={logout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup signup={signup}  />} />
          <Route path="/login" element={<Login login={login}  />} />
          <Route
            path="/animeindex"
            element={
              <AnimeIndex
                fetchAnimeIndex={fetchAnimeIndex}
                currentPage={currentPage}
                loading={loading}
                currentUser={currentUser}
                animeList={animeList}
                setCurrentPage={setCurrentPage}
              />
            }
          />
          <Route
            path="/animeshow/:id"
            element={
              <AnimeShow
                currentUser={currentUser}
                id={id}
              />
            }
          />
          <Route
            path="/myanimelist"
            element={
              <MyAnimeList
                currentUser={currentUser}
                animeList={animeList}
                updateId={updateId}
                id={id}
                createMyAnimeList={createMyAnimeList}
                updateMyAnimeList={updateMyAnimeList}
              />
            }
          />
          <Route path="/myanimelistedit" element={<MyAnimeListEdit />} />
          <Route path="/myanimelistnew" element={<MyAnimeListNew />} />
          <Route path="/myanimelistshow/:id" element={<MyAnimeListShow />} />
          <Route path="/animesearch" element={<AnimeSearch currentUser={currentUser} />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
