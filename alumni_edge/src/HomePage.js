//import styles from "./styles.module.css";

const HomePage = () => {

  return (
    <div id="homePage">
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
                <option>Accounting</option>
                <option>Anthropology</option>
                <option>Biology</option>
                <option>Business</option>
                <option>Computer Science</option>
                <option>Economics</option>
                <option>English</option>
                <option>History</option>
                <option>Humanities</option>
                <option>Mathematics</option>                
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
                <option>Adam Harvey</option>
                <option>Alice Adamson</option>
                <option>Brett Bellamy</option>
                <option>Deacon Livingston</option>
                <option>Gianni Bevan</option>
                <option>Kevin Harris</option>
                <option>Maddison Robin</option>
                <option>Matt Smith</option>
                <option>Nabeel Broadhurst</option>
                <option>Reid Carty</option>
                <option>Ronnie Jennings</option>
                <option>Sean Ibarra</option>
                <option>Stefan Herring</option>
                <option>Toby Mcclain</option>
                <option>Tony Adkins</option>
                <option>Trystan Bowler</option>
                <option>Zachery Wood</option>
              </select>
            </div>
          </div>

        </div>
      </div>

      <div>
        <button id="submit">Submit</button>
      </div>
    </div>
  );
};

export default HomePage;