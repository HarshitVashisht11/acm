import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Magazine from './Pages/Magazine.jsx';
import Resources from './Pages/Resources.jsx';
import Achievements from './Pages/Achievements.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Team from './Pages/Team.jsx';
import Gallery from './Pages/Gallery.jsx';
import Event from './Pages/Event.jsx';
import About from './Pages/About.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/events" element={<Event />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About /> } />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer/>
    </Router>
  </StrictMode>
);
