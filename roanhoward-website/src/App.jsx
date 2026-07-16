import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SidebarNav from './components/SidebarNav';
import CS from './pages/CS';
import Film from './pages/Film';
import Art from './pages/Art';
import Home from './pages/Home';

function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">Page not found</h1>
      <Link to="/" className="not-found__link">Back home</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <SidebarNav />
      <Routes>
        <Route path="/"     element={<div className="page-enter"><Home /></div>} />
        <Route path="/cs"   element={<div className="page-enter"><CS /></div>} />
        <Route path="/film" element={<div className="page-enter"><Film /></div>} />
        <Route path="/art"  element={<div className="page-enter"><Art /></div>} />
        <Route path="*"     element={<div className="page-enter"><NotFound /></div>} />
      </Routes>
    </Router>
  );
}

export default App;
