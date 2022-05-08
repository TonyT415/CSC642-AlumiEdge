import { useNavigate } from "react-router-dom";
import styles from "../styles.module.css";

const Profile17 = () => {
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
          <img className = {styles.pic} src={require("../images/profile17.png")} alt="Professor" width="500px" height="auto" />
          <h2>Nabeel Broadhurst</h2>
        </div>

        <div id="professor-info">
          <div className = {styles.table} id="courses">
            <h3>Courses</h3>
            <div id="course">
              <p className="class">CSC 641 Computer Performance Evaluation (Units: 3)</p>
              <p className="percentage">81%</p>
            </div>
            <div id="course">
              <p className="class">CSC 644 Computer Measurements (Units: 3)</p>
              <p className="percentage">77%</p>
            </div>
            <div id="course">
              <p className="class">CSC 648 Software Engineering (Units: 3)</p>
              <p className="percentage">75%</p>
            </div>
          </div>

          <div className = {styles.table} id="bio">
            <h3>Bio</h3>
            <p>Nabeel Broadhurst received his Ph.D. degree in computer science from Carnegie Mellon University. He also holds M.S. degrees from the University of California at Berkeley and Carnegie Mellon University.</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile17;