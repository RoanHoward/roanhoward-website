import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidebarNav from './components/SidebarNav';

import Resume from './pages/Resume';
import CS from './pages/CS';
import Film from './pages/Film';
import Art from './pages/Art';
import Contact from './pages/Contact';
import Home from './pages/Home'; // new main landing page

import './index.css';

function App() {
  return (
    <Router>
      <SidebarNav /> {/* Always at top */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/cs" element={<CS />} />
        <Route path="/film" element={<Film />} />
        <Route path="/art" element={<Art />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;