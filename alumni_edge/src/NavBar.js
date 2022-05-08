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
        <Link to='/profile1'>Profile1</Link>
        <Link to='/profile2'>Profile2</Link>
        <Link to='/profile3'>Profile3</Link>
        <Link to='/profile4'>Profile4</Link>
        <Link to='/profile5'>Profile5</Link>
        <Link to='/profile6'>Profile6</Link>
        <Link to='/profile7'>Profile7</Link>
        <Link to='/profile8'>Profile8</Link>
        <Link to='/profile9'>Profile9</Link>
        <Link to='/profile10'>Profile10</Link>
        <Link to='/profile11'>Profile11</Link>
        <Link to='/profile12'>Profile12</Link>
        <Link to='/profile13'>Profile13</Link>
        <Link to='/profile14'>Profile14</Link>
        <Link to='/profile15'>Profile15</Link>
        <Link to='/profile16'>Profile16</Link>
        <Link to='/profile17'>Profile17</Link>
      </nav>
    </div>
  );

};

export default NavBar;