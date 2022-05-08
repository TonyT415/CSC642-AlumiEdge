import { useNavigate } from "react-router-dom";
import styles from "../styles.module.css";

const Profile16 = () => {
  const navigate = useNavigate()

  const returnToResults = () => {
    navigate('/')
  }

  return (
    <div>
      <h1>Profile</h1>
      <button onClick={returnToResults}>Back</button>
      <div id="profile-page">
        <div className = {styles.bio} id="professor">
          <img className = {styles.pic} src={require("../images/profile16.png")} alt="Professor" width="500px" height="auto" />
          <h2>Kevin Harris</h2>
        </div>

        <div id="professor-info">
          <div className = {styles.table} id="courses">
            <h3>Courses</h3>
            <div id="course">
              <p className="class">CSC 340 Programming Methodology (Units: 3)</p>
              <p className="percentage">87%</p>
            </div>
            <div id="course">
              <p className="class">CSC 600 Programming Paradigms and Languages (Units: 3)</p>
              <p className="percentage">81%</p>
            </div>
            <div id="course">
              <p className="class">CSC 615 UNIX Programming (Units: 3)</p>
              <p className="percentage">76%</p>
            </div>
          </div>

          <div className = {styles.table} id="bio">
            <h3>Bio</h3>
            <p>Kevin Harris received an A.B. in mathematics from Harvard University and M.S. and Ph.D. degrees in Computer Science from Stanford University.</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile16;