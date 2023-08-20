import React from "react";
import styles from "./Footer.module.css";
import logo from "./images/GenieCart_Teal.png";

const Footer = () => {
  return (
    <footer className={`page-footer font-small ${styles.teal}`}>
      <div className="container-fluid container-lg h-100">
        <div className="container-fluid text-center text-md-left text-light bg-light">
          <div className="row d-flex">
            <div className="col-md-3 d-flex align-items-center">
              <img src={logo} height="60px" alt="GenieCart" />
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className={`col-md-3 ${styles.teal}`}>
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled">
                <li><a href="#!">Link 1</a></li>
                <li><a href="#!">Link 2</a></li>
                <li><a href="#!">Link 3</a></li>
                <li><a href="#!">Link 4</a></li>
              </ul>
            </div>

            <div className={`col-md-6 ${styles.teal}`}>
              <div className="text-center ">
                Made with ❤️ from{" "}
                <a className="text-dark-emphasis" href="https://github.com/PriyanshuSuhalka">
                  Priyanshu
                </a>
                <span>, </span>
                <a href="https://github.com/rahulsuthar1329" className="text-dark-emphasis">Rahul S</a>
                <span>, </span>
                <a href="https://github.com/Rahuljain-tech" className="text-dark-emphasis">Rahul J</a>
                <span> and </span>
                <a href="https://github.com/purviharpalani" className="text-dark-emphasis">Purvi</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
