import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/screens/Index.jsx';
import About from './components/screens/About.jsx';
import Quotes from './components/screens/Quotes.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="quotes" element={<Quotes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
