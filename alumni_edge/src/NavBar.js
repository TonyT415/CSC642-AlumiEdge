import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const redirectHome = () => {
    navigate('/');
  };

  return (
    <div>
      <nav id="navbar">
        <h1 id="alumni-edge" onClick={redirectHome}>Alumni Edge</h1>
        {/* temporary links to check pages */}
        <Link to='/profile'>Profile</Link>
      </nav>
    </div>
  );

};

export default NavBar;