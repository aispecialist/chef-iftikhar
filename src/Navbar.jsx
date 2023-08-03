import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {

  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand gTitlefont" href="#">
      Chef Iftikhar
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item mx-1">
          <NavLink className="nav-link" to="/about">
            About Me
          </NavLink>
        </li>
       
        <li className="nav-item dropdown">
          <NavLink
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Our Menus
          </NavLink>
          <ul className="dropdown-menu">
            <li>
              <NavLink className="dropdown-item" to="/pakistani">
                Pakistani Food List
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/thai">
              Thai Food List
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/chinese">
              Chinese Food List
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/italian">
              Italian Food List
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/drinks">
              Drinks
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/salad">
              Salad
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>

  )
}

export default Navbar