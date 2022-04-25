import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const redirectHome = () => {
    navigate('/home');
  };

  return (
    <div>
      <nav id="navbar">
        <h1 id="alumniEdge" onClick={redirectHome}>Alumni Edge</h1>
      </nav>
    </div>
  );

};

export default NavBar;