import { useNavigate } from "react-router-dom";

const Profile13 = () => {
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
          <img src={require("../images/profile13.png")} alt="Professor" width="500px" height="auto" />
          <h2>Toby Mcclain</h2>
        </div>

        <div id="professor-info">
          <div id="courses">
            <h3>Courses</h3>
            <div id="course">
              <p className="class">CSC 648 Software Engineering (Units: 3)</p>
              <p className="percentage">77%</p>
            </div>
            <div id="course">
              <p className="class">CSC 415 Operating System Principles (Units: 3)</p>
              <p className="percentage">71%</p>
            </div>
            <div id="course">
              <p className="class">CSC 220 Data Structures (Units: 3)</p>
              <p className="percentage">79%</p>
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

export default Profile13;