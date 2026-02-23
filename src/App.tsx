import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Facilities from './pages/Facilities';
import Guide from './pages/Guide';
import Reservation from './pages/Reservation';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </Layout>
    </Router>
  );
}
