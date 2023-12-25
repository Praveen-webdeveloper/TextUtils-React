import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-${props.mode} bg-gradient text-light  px-4`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.abouttxt}
              </Link>
            </li> */}
          </ul>
          <div className="themes mx-4 d-flex align-items-center">
            <p className="mx-2 my-0">Dark Themes : </p>
            <button className="rounded-circle bg-danger bg-gradient mx-1 border-3 border-white" onClick={props.red} style={{width:20,height:20}}></button>
            <button className="rounded-circle bg-warning bg-gradient mx-1 border-3 border-white" onClick={props.yellow} style={{width:20,height:20}}></button>
            <button className="rounded-circle bg-success bg-gradient mx-1 border-3 border-white" onClick={props.green} style={{width:20,height:20}}></button>
            <button className="rounded-circle bg-info bg-gradient mx-1 border-3 border-white" onClick={props.skyblue} style={{width:20,height:20}}></button>
            <button className="rounded-circle bg-primary bg-gradient mx-1 border-3 border-white" onClick={props.blue} style={{width:20,height:20}}></button>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onChange={props.toggleMode}
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {props.enableModeTxt}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttxt: PropTypes.string,
};

Navbar.defaultProps = {
  title: "set title here",
  abouttxt: "AboutUs",
};
