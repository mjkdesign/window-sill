import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <a className="navbar-brand" href="/">Window Sill</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/">About<span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="/login">Login</a>
    </div>
  </div>
</nav>
  );
}

export default Nav;
