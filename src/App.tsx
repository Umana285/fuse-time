import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </div>
    </div>
  );
}
