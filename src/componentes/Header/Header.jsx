import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rol, setRol] = useState(null); // 'Cliente' | 'Admin'
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRol = localStorage.getItem("rol");
    setIsLoggedIn(!!token);
    setRol(userRol);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <Link className="navbar-brand" to="">
          Tea by the Sea
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="">
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="">
                Galería
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="">
                Quiénes Somos
              </Link>
            </li>

            {isLoggedIn && rol === "Cliente" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Reservar
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Mi Perfil
                  </Link>
                </li>
              </>
            )}

            {isLoggedIn && rol === "Admin" && (
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Panel Admin
                </Link>
              </li>
            )}

            {!isLoggedIn ? (
              <>
                <li className="nav-item login">
                  <Link className="nav-link" to="">
                    Login
                  </Link>
                </li>
                <li className="nav-item registro">
                  <Link className="nav-link" to="">
                    Registrarse
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item ">
                <button
                  className="btn btn-sm btn-outline-dark ms-2"
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
