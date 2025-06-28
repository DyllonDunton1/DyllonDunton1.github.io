import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import Windmill from './pages/Windmill.tsx'
import Submarine from './pages/Submarine.tsx'
import AerialPlan from './pages/AerialPlan.tsx'
import CarRacing from './pages/CarRacing.tsx'
import RoboComs from './pages/RoboComs.tsx'
import RoboSoccer from './pages/RoboSoccer.tsx'
import Cluster from './pages/Cluster.tsx';
import Eskate from './pages/Eskate.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/projects/windmill" element={<Windmill/>} />
        <Route path="/projects/submarine" element={<Submarine/>} />
        <Route path="/projects/aerialplan" element={<AerialPlan/>} />
        <Route path="/projects/carracing" element={<CarRacing/>} />
        <Route path="/projects/robocoms" element={<RoboComs/>} />
        <Route path="/projects/robosoccer" element={<RoboSoccer/>} />
        <Route path="/projects/cluster" element={<Cluster/>} />
        <Route path="/projects/eskate" element={<Eskate/>} />
      </Routes>
    </Router>
  </StrictMode>
)
