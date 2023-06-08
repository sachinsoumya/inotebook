import React from 'react'
import { useHistory } from 'react-router-dom';
import { Link, useLocation } from "react-router-dom";


function Navbar(props) {
    let history = useHistory();
    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push("/login")
    }
    let location = useLocation();


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">iNoteBook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link>
                            </li>


                        </ul>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} text-white me-3`}>
                            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" id="navi">{`${props.mode === 'light' ? 'dark mode ' : 'light mode'}`}</label>
                        </div>
                        {!localStorage.getItem('token') ? <form className="d-flex">
                            <Link className="btn btn-primary mx-2" to="/login" role="button"><i class="bi bi-box-arrow-right"></i>Log in</Link>
                            <Link className="btn btn-primary mx-2" to="/signup" role="button"><i class="bi bi-person-fill"></i>Sign up</Link>
                        </form> : <button onClick={handleLogout} className='btn btn-primary'><i class="bi bi-box-arrow-in-left"></i>Logout</button>}
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
