import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Sidebar } from "./components/Sidebar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contacts from "./pages/Contacts"

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default App
