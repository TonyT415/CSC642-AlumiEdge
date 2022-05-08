import { useNavigate } from "react-router-dom";
import styles from "../styles.module.css";

const Profile12 = () => {
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
          <img className = {styles.pic} src={require("../images/profile12.png")} alt="Professor" width="500px" height="auto" />
          <h2>Ronnie Jennings</h2>
        </div>

        <div id="professor-info">
          <div className = {styles.table} id="courses">
            <h3>Courses</h3>
            <div id="course">
              <p className="class">CSC 415 Operating System Principles (Units: 3)</p>
              <p className="percentage">82%</p>
            </div>
            <div id="course">
              <p className="class">CSC 520 Theory of Computing (Units: 3)</p>
              <p className="percentage">79%</p>
            </div>
            <div id="course">
              <p className="class">CSC 317 Introduction to Web Software Development (Units: 3)</p>
              <p className="percentage">86%</p>
            </div>
          </div>

          <div className = {styles.table} id="bio">
            <h3>Bio</h3>
            <p>Ph.D., Chemistry, University of North Carolina, Chapel Hill M.S., Psychology, Duke University B.A., History, Queens University of Charlotte</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile12;