import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import { Routes, Route } from'react-router-dom'

function App() {
  return (
    <>
      <Routes>
       
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element='<h1>This is contact us</h1>' />
        
      </Routes>
    </>
  )
}

export default App
