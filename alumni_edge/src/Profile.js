import { useNavigate } from "react-router-dom";
import styles from "./styles.css";

const Profile = () => {
  const navigate = useNavigate()

  const returnToResults = () => {
    navigate('/results')
  }

  return (
    <div>
      <h1>Profile</h1>
      <button onClick={returnToResults}>Back</button>
      <div id="profile-page">
        <div id="professor">
          <img src="https://johndaleendodontics.com/wp-content/uploads/2018/07/placeholder-male-1.png" alt="Professor" height="400px" />
          <h2>Firstname Lastname</h2>
        </div>

        <div id="professor-info">
          <div id="courses">
            <h3>Courses</h3>
            <div id="course">
              <p>Classes Taught</p>
              <p>Passing Percentage</p>
            </div>
          </div>

          <div id="bio">
            <h3>Bio</h3>
            <p>Professor Bio</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;