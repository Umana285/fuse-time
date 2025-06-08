import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // or use a CSS-in-JS solution

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img
        src="https://placehold.co/100x100?text=Logo"
        alt="Logo"
        className="logo"
      />
      <nav>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/video" className="nav-link">Video</NavLink>
      </nav>
    </div>
  );
}
