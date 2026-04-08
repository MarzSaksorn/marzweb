import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Sidebar } from "./components/Sidebar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contacts from "./pages/Contacts"
import Valentine from "./pages/Valentine"

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/valentine" element={<Valentine />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default App
