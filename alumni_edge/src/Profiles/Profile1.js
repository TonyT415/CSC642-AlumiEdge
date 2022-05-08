import { useNavigate } from "react-router-dom";
import styles from "../styles.module.css";

const Profile1 = () => {
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
          <img className={styles.pic} src={require("../images/profile1.png")} alt="Professor" width="500px" height="auto" />
          <h2>Maddison Robin</h2>
        </div>

        <div id="professor-info">
          <div className={styles.table} id="courses">
            <h3>Courses</h3>
            <div id="course">
              <p className="class">ACCT 100AS Academic Support for Introduction to Financial Accounting</p>
              <p className="percentage">73%</p>
            </div>
            <div id="course">
              <p className="class">ACCT 301 Intermediate Financial Accounting I (Units: 3)</p>
              <p className="percentage">77%</p>
            </div>
            <div id="course">
              <p className="class">ACCT 307 Accounting Information Systems (Units: 3)</p>
              <p className="percentage">87%</p>
            </div>
          </div>

          <div className={styles.table} id="bio">
            <h3>Bio</h3>
            <p>Maddison Robin joined San Francisco State University as an adjunct instructor teaching ACCT 301 in fall 2017. She received her Bachelor of Science Degree in Business Education at South Carolina State University, Masters in Business Administration (Finance) at Webster University, and recently completed her Ph.D in Management/Accounting at Walden University.
</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile1;