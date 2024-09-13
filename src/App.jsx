import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Contact from './pages/Contact'
import { Routes, Route } from'react-router-dom'


function App() {
  return (
    <>
      <Routes>
       
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contact />}/>
        
      </Routes>
    </>
  )
}

export default App
