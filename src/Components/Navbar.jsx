
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* Header Navigation Start */}
      <div className="container header-nav">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light main-menu fixed-top ">
              <div className="container">
                <a href="#" className="navbar-brand">
                  <img src="./asset/image/Logo.png" alt="PinaByteLogo" />
                </a>
                <button
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#beeToggler"
                >
                  <span className="navbar-toggler-icon">
                    <i className="fa fa-bars"></i>
                  </span>
                </button>
                <div className="collapse navbar-collapse" id="beeToggler">
                  <ul className="navbar-nav ml-auto ">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/project">Project</Link>
                    </li>
                    <li>
                      <Link to="/service">Service</Link>
                    </li>
                    <li>
                      <Link to="/team">Team</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/ContactUs">
                        <button className="nav-button">
                          Contact Us <i className="fas fa-angle-right"></i>
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Header Navigation End */}
    </div>
  );
};

export default Navbar;
