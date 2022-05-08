import { useNavigate } from "react-router-dom";
import styles from "../styles.module.css";

const Profile4 = () => {
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
          <img   className = {styles.pic} src={require("../images/profile4.png")} alt="Professor" width="500px" height="auto" />
          <h2>Alice Adamson</h2>
        </div>

        <div id="professor-info">
          <div  className = {styles.table}id="courses">
            <h3>Courses</h3>
            <div id="course">
              <p className="class">ECON 101 Introduction to Microeconomic Analysis (Units: 3)</p>
              <p className="percentage">93%</p>
            </div>
            <div id="course">
              <p className="class">ECON 301 Intermediate Microeconomic Theory (Units: 3)</p>
              <p className="percentage">89%</p>
            </div>
            <div id="course">
              <p className="class">ECON 311 Statistical Methods and Interpretation (Units: 3)</p>
              <p className="percentage">86%</p>
            </div>
          </div>

          <div className = {styles.table} id="bio">
            <h3>Bio</h3>
            <p>Alice Adamson received a B.A. in Economics and Commerce from the University of Rome, and a Ph.D. (Dottorato di Ricerca) in Political Economy from the University of Siena.
</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile4;