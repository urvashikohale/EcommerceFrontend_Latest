import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My Description",
  className = " bg-gradient(to right #49ff9e) text-warning p-4",
  children,
}) => (
  <div>
    <Menu />
    <div className="container-fluid strong">
      <div className="jumbotron   text-center  ">
        <h2 className="display-4 fw-bold text-warning">
          <strong>{title}</strong>
        </h2>
        <p className="lead text-warning fw-bold">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>

    <footer className="footer  mt-auto py-0 ">
      <hr className="bg-dark border-2 border-up "></hr>

      <div className="container-fluid  text-white text-center ">
        <h4>If you got any question, feel free to reach out!</h4>
        <button className="btn btn-warning btn-lg">Contact Us</button>
      </div>
      <div className="container text-start">
        <span className="text-white ">
          An Amazing
          <span className="text-warning">MERN</span>
          Bootcamp
        </span>
      </div>
    </footer>
  </div>
);

export default Base;
