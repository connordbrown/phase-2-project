import { NavLink } from 'react-router-dom';
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="new-form">Add Emoji</NavLink>
        </nav>
    )
}

export default NavBar;