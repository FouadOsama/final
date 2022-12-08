import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import mylogo from "../../Components/../Images/mylogo.png"
import "./NavBar.css"

function NavBar({ userData,logOut }) {
  
  return (
    <>
      <nav className="navbar text-white navbar-expand-lg bg-dark">
        <div className="container">
          <div className="logo">
            <Link to="Home">
              <img src={mylogo} className="w-100" />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            {userData ? (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link text-white nav-all active"
                    aria-current="page"
                    to="Home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-all nav-link" to="All">
                    All
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link nav-all dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Platforms
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="platforms/pc">
                        Pc
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="platforms/browser">
                        Browser
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link nav-all dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sort-By
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="Sort-By/release-date">
                        release-date
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Sort-By/popularity">
                        popularity
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Sort-By/alphabetical">
                        alphabetical
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Sort-By/relevance">
                        relevance
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link nav-all dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Catogeries
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="Catogeries/racing">
                        racing
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Catogeries/sports">
                        sports
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Catogeries/social">
                        social
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Catogeries/shooter">
                        shooter
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="Catogeries/open-world"
                      >
                        open-world
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Catogeries/zombie">
                        zombie
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Catogeries/fantasy">
                        fantasy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="Catogeries/action-rpg"
                      >
                        action-rpg
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Catogeries/action">
                        action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Catogeries/flight">
                        flight
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="Catogeries/battle-royale"
                      >
                        battle-royale
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
          {userData ? (
            <div className="log-out">
              <span onClick={logOut} className="btn btn-dark">
                Log Out
              </span>
            </div>
          ) : (
            <>
              <div className="join-free">
                <Link className="btn btn-dark" to="Register">
                  Join Free
                </Link>
              </div>
              <div className="log-in">
                <Link to="LogIn" className="btn btn-dark">
                  Log In
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
