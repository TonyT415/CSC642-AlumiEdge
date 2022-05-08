import { useNavigate } from "react-router-dom";

const Profile3 = () => {
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
          <img src={require("../images/profile3.png")} alt="Professor" width="500px" height="auto" />
          <h2>Gianni Bevan</h2>
        </div>

        <div id="professor-info">
          <div id="courses">
            <h3>Courses</h3>
            <div id="course">
              <p className="class">BUS 216 Foundations in Business Communications (Units: 3)</p>
              <p className="percentage">87%</p>
            </div>
            <div id="course">
              <p className="class">BUS 300GW Business Communication for Professionals - GWAR (Units: 3)</p>
              <p className="percentage">92%</p>
            </div>
            <div id="course">
              <p className="class">BUS 350 Introduction to Entrepreneurship (Units: 3)</p>
              <p className="percentage">91%</p>
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

export default Profile3;