import { useNavigate } from "react-router-dom";
import styles from "../styles.module.css";

const Profile2 = () => {
  const navigate = useNavigate()

  const returnToResults = () => {
    navigate('/')
  }

  return (
    <div>
      <h1>Profile</h1>
      <button onClick={returnToResults}>Back</button>
      <div  id="profile-page">
        <div  className = {styles.bio} id="professor">
          <img className={styles.pic}src={require("../images/profile2.png")} alt="Professor" width="500px" height="auto" />
          <h2>Stefan Herring</h2>
        </div>

        <div id="professor-info">
          <div className={styles.table}  id="courses">
            <h3>Courses</h3>
            <div id="course">
              <p className="class">ANTH 316 Contemporary Culture of Greece: The Past in the Present (Units: 3)</p>
              <p className="percentage">79%</p>
            </div>
            <div id="course">
              <p className="class">ANTH 120 Introduction to Social and Cultural Anthropology (Units: 3)</p>
              <p className="percentage">88%</p>
            </div>
            <div id="course">
              <p className="class">ANTH 300 Foundations of Anthropology: History (Units: 3)</p>
              <p className="percentage">84%</p>
            </div>
          </div>

          <div className={styles.table} id="bio">
            <h3>Bio</h3>
            <p>Stefan Herring specializes in linguistic anthropology, language ideology, language politics, nationalism, popular culture, and post-Soviet states. He holds Ph.D., Anthropology, University of Michigan, 1998
</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile2;