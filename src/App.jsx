import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Join from './pages/Join';
import Partner from './pages/Partner';
import Success from './pages/Success';

function AppRoutes({ theme, toggleTheme }) {
  const location = useLocation();

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<Join />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}


export default function App({ theme, toggleTheme }) {
  return (
    <Router>
      <AppRoutes theme={theme} toggleTheme={toggleTheme} />
    </Router>
  );
}



