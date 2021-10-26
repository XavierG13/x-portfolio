import React from "react";
import x__logo from "../../assets/images/x.svg";

export default function index() {
  return (
    <footer>
      <div className="row footer__row">
        <a href="#" className="footer__anchor">
          <figure className="footer__logo">
            <img src={x__logo} className="footer__logo--img" alt="" />
          </figure>
          <span className="footer__logo--popper">
            Top <i className="fas fa-arrow-up"></i>
          </span>
        </a>
        <div className="footer__social--list">
          <a
            href="https://github.com/XavierG13"
            className="
              footer__social--link
              link__hover-effect link__hover-effect--white
            "
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/xavierguzman1993"
            className="
              footer__social--link
              link__hover-effect link__hover-effect--white
            "
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="mailto:guzmanxavi112@gmail.com"
            className="
              footer__social--link
              link__hover-effect link__hover-effect--white
            "
            rel="noreferrer"
            target="_blank"
          >
            Email
          </a>
          <a
            href="./assets/images/XavierGuzmanResume.pdf"
            className="
              footer__social--link
              link__hover-effect link__hover-effect--white
            "
            target="_blank"
            download
          >
            Resume
          </a>
        </div>
        <div className="footer__copyright">Copyright © 2021 Xavier Guzman</div>
      </div>
    </footer>
  );
}
