import { useNavigate } from "react-router-dom";

const Profile1 = () => {
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
          <img src={require("../images/profile1.png")} alt="Professor" width="500px" height="auto" />
          <h2>Maddison Robin</h2>
        </div>

        <div id="professor-info">
          <div id="courses">
            <h3>Courses</h3>
            <div id="course">
              <p className="class">ACCT 100AS Academic Support for Introduction to Financial Accounting</p>
              <p className="percentage">73%</p>
            </div>
            <div id="course">
              <p className="class">ACCT 301 Intermediate Financial Accounting I (Units: 3)</p>
              <p className="percentage">77%</p>
            </div>
            <div id="course">
              <p className="class">ACCT 307 Accounting Information Systems (Units: 3)</p>
              <p className="percentage">87%</p>
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

export default Profile1;