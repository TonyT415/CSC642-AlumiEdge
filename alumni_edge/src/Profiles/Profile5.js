import { useNavigate } from "react-router-dom";
import styles from "../styles.module.css";

const Profile5 = () => {
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
          <img  className = {styles.pic} src={require("../images/profile5.png")} alt="Professor" width="500px" height="auto" />
          <h2>Deacon Livingston</h2>
        </div>

        <div className = {styles.table} id="professor-info">
          <div id="courses">
            <h3>Courses</h3>
            <div id="course">
              <p className="class">HIST 110 History of Western Civilization I (Units: 3)</p>
              <p className="percentage">81%</p>
            </div>
            <div id="course">
              <p className="class">HIST 111 History of Western Civilization II (Units: 3)</p>
              <p className="percentage">76%</p>
            </div>
            <div id="course">
              <p className="class">HIST 115 World History Since 1500 (Units: 3)</p>
              <p className="percentage">79%</p>
            </div>
          </div>

          <div  className = {styles.table} id="bio">
            <h3>Bio</h3>
            <p>Deacon Livingston is an intellectual historian specializing in twentieth-century Europe. He earned his BA in Mathematics and History at the University of Cambridge, and his PhD at Harvard University. </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile5;