import { Link, useNavigate } from "react-router-dom";

import { userSelect, action } from "../redux/user";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";


const Navbar = () => {
  const user = useSelector(userSelect);
  const dispatch = useDispatch()
const navigate = useNavigate()
  const handleLogout = (e)=>{
    e.preventDefault()
    dispatch(action.logout())
    signOut(auth).then(()=>navigate("/")).catch((error) => console.log(error))
  }

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="badge bg-danger  text-white fs-4">NewsApp</span>
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/technology" className="nav-link">
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/business" className="nav-link">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/health" className="nav-link">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/science" className="nav-link">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sports" className="nav-link">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/entertainment" className="nav-link">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link to ="/fav"className="nav-link">Favorites</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">{user?.displayName}</Link>
            </li>
          </ul>
          <div className="d-flex">
            {user !== null ? (
              <button className="btn btn-outline-success" onClick={handleLogout}> Logout</button>
            ) : (
              <>
                <Link to="/signup" className="btn btn-outline-success me-2">
                  Signup
                </Link>
                <Link to="/login" className="btn btn-outline-success">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
