import { useNavigate } from "react-router-dom";
import styles from "../styles.module.css";

const Profile9 = () => {
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
          <img className = {styles.pic} src={require("../images/profile9.png")} alt="Professor" width="500px" height="auto" />
          <h2>Tony Adkins</h2>
        </div>

        <div id="professor-info">
          <div className = {styles.table} id="courses">
            <h3>Courses</h3>
            <div id="course">
              <p className="class">ACCT 803 Auditing Principles and Practice (Units: 3)</p>
              <p className="percentage">82%</p>
            </div>
            <div id="course">
              <p className="class">ACCT 804 Legal and Professional Responsibilities in Accounting (Units: 3)</p>
              <p className="percentage">73%</p>
            </div>
            <div id="course">
              <p className="class">ACCT 808 International Accounting (Units: 3)</p>
              <p className="percentage">72%</p>
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

export default Profile9;