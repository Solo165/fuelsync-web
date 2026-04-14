import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Landing from './pages/Landing'
import Docs from './pages/Docs'
import Prototype from './pages/Prototype'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/prototype" element={<Prototype />} />
      </Routes>
    </>
  )
}
