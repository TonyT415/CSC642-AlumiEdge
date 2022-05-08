import { useNavigate } from "react-router-dom";
import styles from "../styles.module.css";

const Profile15 = () => {
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
          <img className = {styles.pic} src={require("../images/profile15.png")} alt="Professor" width="500px" height="auto" />
          <h2>Brett Bellamy</h2>
        </div>

        <div id="professor-info">
          <div className = {styles.table} id="courses">
            <h3>Courses</h3>
            <div id="course">
              <p className="class">MATH 124 Elementary Statistics (Units: 3)</p>
              <p className="percentage">85%</p>
            </div>
            <div id="course">
              <p className="class">MATH 197 Prelude to Calculus I (Units: 3)</p>
              <p className="percentage">79%</p>
            </div>
            <div id="course">
              <p className="class">MATH 198 Prelude to Calculus II (Units: 3)</p>
              <p className="percentage">74%</p>
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

export default Profile15;