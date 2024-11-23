import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <Link className="navbar-brand" to="/about">
          About
        </Link>
        <Link className="navbar-brand" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}
