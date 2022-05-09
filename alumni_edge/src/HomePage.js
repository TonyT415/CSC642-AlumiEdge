import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const navigate = useNavigate();

  const [university, setUniversity] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [professor, setProfessor] = React.useState("");

  const handleSubmit = () => {
    console.log(university);
    console.log(department);
    console.log(professor);

    if (university === "San Francisco State University") {
      if (department === "Accounting") {
        if (professor === "Maddison Robin") {
          navigate('/profile1');
        } else if (professor === "Tony Adkins") {
          navigate('/profile9');
        } else {
          alert("Professor not found in department or school");
        }
      } else if (department === "Anthropology") {
        if (professor === "Stefan Herring") {
          navigate('/profile2');
        } else {
          alert("Professor not found in department or school");
        }
      } else if (department === "Business") {
        if (professor === "Gianni Bevan") {
          navigate('/profile3');
        } else {
          alert("Professor not found in department or school");
        }
      } else if (department === "Economics") {
        if (professor === "Alice Adamson") {
          navigate('/profile4');
        } else {
          alert("Professor not found in department or school");
        }
      } else if (department === "History") {
        if (professor === "Deacon Livingston") {
          navigate('/profile5');
        } else {
          alert("Professor not found in department or school");
        }
      } else if (department === "Humanities") {
        if (professor === "Matt Smith") {
          navigate('/profile6');
        } else {
          alert("Professor not found in department or school");
        }
      } else if (department === "Biology") {
        if (professor === "Reid Carty") {
          navigate('/profile7');
        } else {
          alert("Professor not found in department or school");
        }
      } else if (department === "English") {
        if (professor === "Trystan Bowler") {
          navigate('/profile8');
        } else {
          alert("Professor not found in department or school");
        }
      } else if (department === "Computer Science") {
        if (professor === "Zachery Wood") {
          navigate('/profile10');
        } else if (professor === "Adam Harvey") {
          navigate('/profile11');
        } else if (professor === "Ronnie Jennings") {
          navigate('/profile12');
        } else if (professor === "Toby Mcclain") {
          navigate('/profile13');
        } else if (professor === "Sean Ibarra") {
          navigate('/profile14');
        } else if (professor === "Kevin Harris") {
          navigate('/profile16');
        } else if (professor === "Nabeel Broadhurst") {
          navigate('/profile17');
        } else {
          alert("Professor not found in department or school");
        }
      } else if (department === "Mathematics") {
        if (professor === "Brett Bellamy") {
          navigate('/profile15');
        } else {
          alert("Professor not found in department or school");
        }
      } else {
          alert("Professor not found in department or school");
        }
    } else {
      alert("Professor not found in department or school");
    }

  }

  return (
    <div id="homePage">
      <h1>Home</h1>
      <div id="steps">
        <div id="step1">
          <h3>Step 1</h3>
          <div class="stepBox">
            <h4 class="title">School</h4>
            <div>
              <select class="choiceList" onChange={e => setUniversity(e.target.value)}>
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
              <select class="choiceList" onChange={e => setDepartment(e.target.value)}>
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
              <select class="choiceList" onChange={e => setProfessor(e.target.value)}>
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
        <button id="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default HomePage;