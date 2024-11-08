import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/screens/Index.jsx';
import About from './components/screens/About.jsx';
import Quotes from './components/screens/Quotes.jsx';
import Login from './components/screens/Login.jsx';
import UserPage from './components/screens/UserPage.jsx';
import Blog from './components/screens/Blog.jsx';
import BlogUser from './components/screens/BlogUser.jsx';
import SelfHelp from './components/screens/SelfHelp.jsx';
import SelfHelpUser from './components/screens/SelfHelpUser.jsx';
import QuotesUser from './components/screens/QuotesUser.jsx';
import AboutUser from './components/screens/AboutUser.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="/login" element={<Login isRegister={false} />} />
          <Route path="/register" element={<Login isRegister={true} />} />
          <Route path='/user' element={<UserPage />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blogUser' element={<BlogUser />} />
          <Route path='/selfHelp' element={<SelfHelp />} />
          <Route path='/selfHelpUser' element={<SelfHelpUser />} />
          <Route path='/quotesUser' element={<QuotesUser />} />
          <Route path='/aboutUser' element={<AboutUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
