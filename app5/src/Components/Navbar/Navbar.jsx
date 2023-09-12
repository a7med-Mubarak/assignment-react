import { Link } from "react-router-dom";

import "../Navbar/Navbar.css";

export default function Navbar() {
    return <>

      <div className="Nav">
        <div className="d-flex justify-content-around">
              
         <Link className="d-flex fa-2x p-lg-4 justify-content-between text-white text-decoration-none px-3" to="">START FRAMEWORK</Link>
          <h4 className="d-flex my-auto">
              <Link className="text-white text-decoration-none px-3" to="about">ABOUT</Link>
              <Link className="text-white text-decoration-none px-3" to="Portfolio">PORTFOLIO</Link>
              <Link className="text-white text-decoration-none px-3" to="contact">CONTEAT</Link>
          </h4>

        </div>
      </div>
    </>
}