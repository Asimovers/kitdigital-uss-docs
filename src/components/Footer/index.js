import React from "react";

export default function Footer() {
  return (
    <footer className="uss-footer">
      <div className="uss-footer-links">
        <div className="container"></div>
      </div>
      <div className="uss-footer-main">
        <div className="container">
          <img
            src="https://www.uss.cl/wp-content/themes/uss/img/logo-white.png"
            alt="Logo USS"
          />
        </div>
      </div>
      <div className="uss-footer-baseline">
        <div className="container">
          <div className="row">
            <div className="col-xl-6  d-flex align-items-center">
              <ul className="uc-footer__link">
                <li>
                  <a href="http://">Ver politicas de privacidad</a>
                </li>
                <li>
                  <a href="http://">Términos legales</a>
                </li>
                <li>
                  <a href="http://">Preguntas frecuentes</a>
                </li>
              </ul>
            </div>
            <div className="col-xl-6  d-flex justify-content-end gap-40">
              <a className="uss-link uss-link--phone" href="phone:600 771 3000">
                <i className="uss-icon ri-phone-line"></i>
                600 771 3000
              </a>
              <ul className="uc-footer__link uc-footer__link-social">
                <li>
                  <a className="uss-btn btn-icon btn-icon--s" href="">
                    <i className="uss-icon ri-facebook-line"></i>
                  </a>
                </li>
                <li>
                  <a className="uss-btn btn-icon btn-icon--s" href="">
                    <i className="uss-icon ri-twitter-line"></i>
                  </a>
                </li>
                <li>
                  <a className="uss-btn btn-icon btn-icon--s" href="">
                    <i className="uss-icon ri-instagram-line"></i>
                  </a>
                </li>
                <li>
                  <a className="uss-btn btn-icon btn-icon--s" href="">
                    <i className="uss-icon ri-youtube-line"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
