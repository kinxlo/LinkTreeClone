import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
// import Layout from './hocs/Layout';
import Contact from './pages/contact';
import ErrPage from './pages/error';

const App = () => {
  return (
    <div>
      <Router>
        {/* <Layout> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="*" element={<ErrPage />} />
        </Routes>
        {/* </Layout> */}
      </Router>
    </div>
  );
};

export default App;
