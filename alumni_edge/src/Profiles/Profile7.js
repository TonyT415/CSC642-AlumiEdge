import { useNavigate } from "react-router-dom";

const Profile7 = () => {
  const navigate = useNavigate()

  const returnToResults = () => {
    navigate('/results')
  }

  return (
    <div>
      <h1>Profile</h1>
      <button onClick={returnToResults}>Back</button>
      <div id="profile-page">
        <div id="professor">
          <img src={require("../images/profile7.png")} alt="Professor" width="500px" height="auto" />
          <h2>Reid Carty</h2>
        </div>

        <div id="professor-info">
          <div id="courses">
            <h3>Courses</h3>
            <div id="course">
              <p className="class">BIOL 100 Human Biology (Units: 3)</p>
              <p className="percentage">76%</p>
            </div>
            <div id="course">
              <p className="class">BIOL 101 Human Biology Laboratory (Unit: 1)</p>
              <p className="percentage">83%</p>
            </div>
            <div id="course">
              <p className="class">BIOL 210 General Microbiology and Public Health (Units: 3)</p>
              <p className="percentage">74%</p>
            </div>
          </div>

          <div id="bio">
            <h3>Bio</h3>
            <p>Professor Bio</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile7;