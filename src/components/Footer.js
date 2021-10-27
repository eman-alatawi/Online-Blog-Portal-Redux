import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <p>Ⓒ Copy right for Eman Alatawi 2021</p>
        <div className="iconsContainer">
          <div className="me-4">
            <a href="https://www.linkedin.com/in/eman-alatawi/" target="_blank" rel="noreferrer">
              <span className="icon">
                <i className="fab fa-linkedin-in"></i>
              </span>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <span className="icon me-4">
                <i className="fab fa-twitter"></i>
              </span>
            </a>
          </div>

          <div>
            <a href="https://github.com/eman-alatawi" target="_blank" rel="noreferrer">
              <span className="icon me-4">
                <i className="fab fa-github"></i>
              </span>
            </a>
          </div>
          <div>
            <a href="https://behance.net/" target="_blank" rel="noreferrer">
              <span className="icon me-4">
                <i className="fab fa-behance"></i>
              </span>
            </a>
          </div>

          <div>
            <a href="https://youtube.com/" target="_blank" rel="noreferrer">
              <span className="icon me-4">
                <i className="fab fa-youtube"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
