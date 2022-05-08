import { useNavigate } from "react-router-dom";
import styles from "../styles.module.css";

const Profile8 = () => {
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
          <img className = {styles.pic} src={require("../images/profile8.png")} alt="Professor" width="500px" height="auto" />
          <h2>Trystan Bowler</h2>
        </div>

        <div id="professor-info">
          <div className = {styles.table} id="courses">
            <h3>Courses</h3>
            <div id="course">
              <p className="class">ENG 112 Reading and Writing Techniques (Unit: 1)</p>
              <p className="percentage">81%</p>
            </div>
            <div id="course">
              <p className="class">ENG 200 Writing Practices in Professional Contexts (Units: 3)</p>
              <p className="percentage">79%</p>
            </div>
            <div id="course">
              <p className="class">ENG 212 Advanced Grammar for Writing - Multilingual (Units: 3)</p>
              <p className="percentage">82%</p>
            </div>
          </div>

          <div className = {styles.table} id="bio">
            <h3>Bio</h3>
            <p>BA, Mount Allison University, English (Honors) / Computer Science (2000) <br></br>
MA, Western University, English Literature / Theory and Criticism (2002) <br></br>
PhD, New York University, English and American Literature (2008)
</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile8;