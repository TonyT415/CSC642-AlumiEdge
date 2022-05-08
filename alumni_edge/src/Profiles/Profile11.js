import { useNavigate } from "react-router-dom";
import styles from "../styles.module.css";

const Profile11 = () => {
  const navigate = useNavigate()

  const returnToResults = () => {
    navigate('/results')
  }

  return (
    <div>
      <h1>Profile</h1>
      <button onClick={returnToResults}>Back</button>
      <div id="profile-page">
        <div className = {styles.bio} id="professor">
          <img className = {styles.pic} src={require("../images/profile11.png")} alt="Professor" width="500px" height="auto" />
          <h2>Adam Harvey</h2>
        </div>

        <div id="professor-info">
          <div className = {styles.table} id="courses">
            <h3>Courses</h3>
            <div id="course">
              <p className="class">CSC 309 Computer Programming (Units: 3)</p>
              <p className="percentage">89%</p>
            </div>
            <div id="course">
              <p className="class">CSC 317 Introduction to Web Software Development (Units: 3)</p>
              <p className="percentage">87%</p>
            </div>
            <div id="course">
              <p className="class">CSC 340 Programming Methodology (Units: 3)</p>
              <p className="percentage">81%</p>
            </div>
          </div>

          <div className = {styles.table} id="bio">
            <h3>Bio</h3>
            <p>Professor Bio</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile11;