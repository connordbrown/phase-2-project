// enable links to other pages and .active styling
import { NavLink } from 'react-router-dom';
// styling for NavBar
import "./NavBar.css";

// create nav bar with three endpoints
function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/new-emoji-form">Add Emoji</NavLink>
        </nav>
    )
}

export default NavBar;