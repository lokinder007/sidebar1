// import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
 
  return (
    <>
       <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light  ">

          <div className="container">

            <Link className="logo " to="/">
              <h2>
                <span>R</span>eact
                <span>A</span>pp
              </h2>
            </Link>
            
            <div>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                <div className="social-links">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                    <i class='fab fa-facebook-f' />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                    <i class='fab fa-twitter' />
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                    <i class='fab fa-instagram' />
                  </a>
                  <a href="https://www.linkedin.com/in/lokinder007/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <i class='fab fa-linkedin-in' />
                  </a>                 
                </div>

              </ul>
            </div>
          </div>

        </nav>
      </section>
    </>
  );
}

export default Navbar;
