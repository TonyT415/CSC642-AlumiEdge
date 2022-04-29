import styles from "./styles.module.css";

const HomePage = () => {

  return (
    <div>
      <h1>Home</h1>
      <div id="steps">
        <div id="step1">
          <h3>Step 1</h3>
          <div class="stepBox">
            <h4 class="title">School</h4>
            <div>
              <select class="choiceList">
                <option>Select School</option>
                <option>San Francisco State University</option>
                <option>University of San Francisco</option>
              </select>
            </div>
          </div>

        </div>

        <div id="step2">
          <h3>Step 2</h3>
          <div class="stepBox">
            <h4 class="title">Department</h4>
            <div>
              <select class="choiceList">
                <option>Select Department</option>
                <option>Mathematics</option>
                <option>Computer Science</option>
              </select>
            </div>
          </div>

        </div>

        <div id="step3">
          <h3>Step 3</h3>
          <div class="stepBox">
            <h4 class="title">Professor</h4>
            <div>
              <select class="choiceList">
                <option>Select Professors</option>
                <option>Firstname Lastname</option>
              </select>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;