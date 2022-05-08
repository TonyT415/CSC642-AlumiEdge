import { useNavigate } from "react-router-dom";

const Profile6 = () => {
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
          <img src={require("../images/profile6.png")} alt="Professor" width="500px" height="auto" />
          <h2>Matt Smith</h2>
        </div>

        <div id="professor-info">
          <div id="courses">
            <h3>Courses</h3>
            <div id="course">
              <p className="class">HUM 130 The Humanities: Major Works (Units: 3)</p>
              <p className="percentage">85%</p>
            </div>
            <div id="course">
              <p className="class">HUM 220 Values and Culture (Units: 3)</p>
              <p className="percentage">83%</p>
            </div>
            <div id="course">
              <p className="class">HUM 225 Values in American Life (Units: 3)</p>
              <p className="percentage">86%</p>
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

export default Profile6;