import { useNavigate } from "react-router-dom";

const Profile10 = () => {
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
          <img src={require("../images/profile10.png")} alt="Professor" width="500px" height="auto" />
          <h2>Zachery Wood</h2>
        </div>

        <div id="professor-info">
          <div id="courses">
            <h3>Courses</h3>
            <div id="course">
              <p className="class">CSC 210 Introduction to Computer Programming (Units: 3)</p>
              <p className="percentage">93%</p>
            </div>
            <div id="course">
              <p className="class">CSC 211 Introduction to Software Lab (Unit: 1)</p>
              <p className="percentage">94%</p>
            </div>
            <div id="course">
              <p className="class">CSC 220 Data Structures (Units: 3)</p>
              <p className="percentage">89%</p>
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

export default Profile10;