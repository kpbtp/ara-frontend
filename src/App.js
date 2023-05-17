import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import { useState } from 'react'
import mockUsers from './mockUsers'
import Signup from './components/Signup'
import Login from './components/Login'


const App = () => {

  const [currentUser, setCurrentUser] = useState(mockUsers)

  return(
    <>
      <BrowserRouter>
        <Header current_user={currentUser}/>
        <Routes>
          <Route path='/' element={<Home /> }/>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
