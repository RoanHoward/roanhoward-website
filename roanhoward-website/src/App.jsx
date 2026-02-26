import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SidebarNav from './components/SidebarNav';
import CS from './pages/CS';
import Film from './pages/Film';
import Art from './pages/Art';
import Home from './pages/Home';
import Travel from './pages/Travel';
import Tlingit from './pages/Tlingit';
import './index.css';

function ViewTransitionWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    if (!document.startViewTransition) return;
    // View transition is triggered by React Router navigation naturally;
    // this effect runs after navigation to ensure page-enter plays.
  }, [location.pathname]);

  return children;
}

function AppRoutes() {
  return (
    <ViewTransitionWrapper>
      <Routes>
        <Route path="/"        element={<div className="page-enter"><Home /></div>} />
        <Route path="/cs"      element={<div className="page-enter"><CS /></div>} />
        <Route path="/film"    element={<div className="page-enter"><Film /></div>} />
        <Route path="/art"     element={<div className="page-enter"><Art /></div>} />
        <Route path="/travel"  element={<div className="page-enter"><Travel /></div>} />
        <Route path="/tlingit" element={<div className="page-enter"><Tlingit /></div>} />
      </Routes>
    </ViewTransitionWrapper>
  );
}

function App() {
  return (
    <Router>
      <SidebarNav />
      <AppRoutes />
    </Router>
  );
}

export default App;
