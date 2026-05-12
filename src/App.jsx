
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Layout from './components/Layout'
import Tecnology from './pages/Tecnology'
import Connect from './pages/Connect'
function App() {

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projectDetails" element={<ProjectDetails />} />
            <Route path="/tecnology" element={<Tecnology />} />
            <Route path="/connect" element={< Connect />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
