

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FormRempla from './pages/FormRempla'
import Manager from './pages/Manager'
import "@fontsource/pacifico"


function App() {


  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/create" element={<FormRempla></FormRempla>}></Route>
      <Route path="/manager" element={<Manager></Manager>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
