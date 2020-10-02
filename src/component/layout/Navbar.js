import React from 'react';
import { Link ,NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">CRUD APP</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <NavLink className="nav-link" exact to="/">HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">ABOUT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact">CONTACT</NavLink>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-light" to="/adduser">Add User</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
