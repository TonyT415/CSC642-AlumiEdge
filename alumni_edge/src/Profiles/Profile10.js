import { useNavigate } from "react-router-dom";
import styles from "../styles.module.css";


const Profile10 = () => {
  const navigate = useNavigate()

  const returnToResults = () => {
    navigate('/')
  }

  return (
    <div>
      <h1>Profile</h1>
      <button onClick={returnToResults}>Back</button>
      <div id="profile-page">
        <div className = {styles.bio}  id="professor">
          <img className = {styles.pic} src={require("../images/profile10.png")} alt="Professor" width="500px" height="auto" />
          <h2>Zachery Wood</h2>
        </div>

        <div id="professor-info">
          <div className = {styles.table} id="courses">
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

          <div className = {styles.table} id="bio">
            <h3>Bio</h3>
            <p>Zachery Wood completed his Ph.D. at Cornell University and his undergraduate studies at Rice University. His research interests lie in the area of programming languages, ranging from theory to design to implementation. He has collaborated actively with researchers in several other disciplines of computer science, particularly computer architecture on problems at the hardware/software interface.</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile10;