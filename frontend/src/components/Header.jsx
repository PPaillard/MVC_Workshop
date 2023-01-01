import { Link, useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/userContext";

const BACK_END_URL = import.meta.env.VITE_BACKEND_URL;

function Header() {
  const { user, setUser } = useCurrentUserContext();

  const navigate = useNavigate();

  const handleDisconnection = () => {
    // gestion de la deconnexion
    localStorage.clear();
    setUser({});
    navigate("/");
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {user.email ? (
                <>
                  <li className="nav-item">
                    <Link to="/articles" className="nav-link">
                      Articles
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      onClick={handleDisconnection}
                      className="ml-auto btn btn-danger"
                    >
                      Disconnect
                    </button>
                  </li>
                  <li className="nav-item">
                    <Link to="/avatar" className="nav-link">
                      {/* TODO lien vers le profil */}
                      <img
                        src={`${BACK_END_URL}/api/avatars/${user.avatar}`}
                        alt="Avatar"
                        width={24}
                        height={24}
                      />
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signUp" className="nav-link">
                      SignUp
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <nav />
    </header>
  );
}

export default Header;
