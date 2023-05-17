
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RemplaForm from './pages/RemplaForm'
import Manager from './pages/Manager'
import "@fontsource/pacifico"


function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/create" element={<RemplaForm/>}></Route>
      <Route path="/manager" element={<Manager></Manager>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
