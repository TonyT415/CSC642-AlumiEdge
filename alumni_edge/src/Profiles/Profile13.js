import { useNavigate } from "react-router-dom";
import styles from "../styles.module.css";

const Profile13 = () => {
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
          <img className = {styles.pic} src={require("../images/profile13.png")} alt="Professor" width="500px" height="auto" />
          <h2>Toby Mcclain</h2>
        </div>

        <div id="professor-info">
          <div className = {styles.table} id="courses">
            <h3>Courses</h3>
            <div id="course">
              <p className="class">CSC 648 Software Engineering (Units: 3)</p>
              <p className="percentage">77%</p>
            </div>
            <div id="course">
              <p className="class">CSC 415 Operating System Principles (Units: 3)</p>
              <p className="percentage">71%</p>
            </div>
            <div id="course">
              <p className="class">CSC 220 Data Structures (Units: 3)</p>
              <p className="percentage">79%</p>
            </div>
          </div>

          <div className = {styles.table} id="bio">
            <h3>Bio</h3>
            <p>Toby Mcclain is a Professor in the Department of Computer Science at San Francisco State University, where he has been since 1994. From 2013 to 2018 he served as Department Chair. He received his Ph.D. in Computer Science from the University of Rochester in 1994.</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile13;