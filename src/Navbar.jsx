import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-11 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  Kancha Kitchen
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item active">
                      <NavLink className="nav-link" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        activeClassName="col_active"
                        to="menu">
                        Menu
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="contact">
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Navbar;