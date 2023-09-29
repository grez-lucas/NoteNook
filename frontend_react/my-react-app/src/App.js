import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "./App.css";
import sample1 from "./images/imagen 1.png";
import sample2 from "./images/imagen 2.png";
import sample3 from "./images/imagen 3.png";
//import UsersView from "./UsersView"
//import GroupView from "./Groups/GroupView"
//import VisualizerView from "./visualizerView"
//import AssignmentView from "./Assignments/assignmentView";
//import EvaluationView from "./Evaluation/evaluationView";

function App() {
  const [user, setUser] = useState({
    is_Admin: true, // Replace with the actual user object or state value pls
    is_visualizer: true,
    is_Evaluator: true,
  });
  const [menuState, setMenuState] = useState(0);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate a login action (you should replace this with your actual login logic)
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Simulate a logout action (you should replace this with your actual logout logic)
    setIsLoggedIn(false);
  };

  return (
    <div>
        <NavBar setMenuState={setMenuState} isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
        {menuState === 1 && (
        <>
            {/* <UsersView /> */}
        </>
        )}
        {menuState === 2 && (
        <>
            {/* puede crear grupos, pruebas y evaluaciones. */}
            {/* <VisualizerView /> */}
        </>
        )}
        {menuState === 3 && (
        <>
            {/* puede ver los dashboard de resultado */}
            {/* <GroupView /> */}
        </>
        )}
        {menuState === 4 && (
        <>
            {/* puede crear grupos, pruebas y evaluaciones. */}
            {/* <AssignmentView /> */}
        </>
        )}
        {menuState === 5 && (
        <>
            {/* puede crear grupos, pruebas y evaluaciones. */}
            {/* <EvaluationView /> */}
        </>
        )}

<div className="uploads-container">
  <h1>Last Upload files: </h1>
  <div className="items-container">
    <div className="upload-item">
      <img src={sample1} alt="Document 1" />
      <p>Document 1</p>
    </div>
    <div className="upload-item">
      <img src={sample2} alt="Document 2" />
      <p>Document 2</p>
    </div>
    <div className="upload-item">
      <img src={sample3} alt="Document 3" />
      <p>Document 3</p>
    </div>
    <div className="upload-item more">
      <span className="more-icon">...</span>
      <p>More</p>
    </div>
  </div>
</div>

<div className="uploads-container">
  <h1>more popular: </h1>
  <div className="items-container">
    <div className="upload-item">
      <img src={sample1} alt="Document 1" />
      <p>Document 1</p>
    </div>
    <div className="upload-item">
      <img src={sample2} alt="Document 2" />
      <p>Document 2</p>
    </div>
    <div className="upload-item">
      <img src={sample3} alt="Document 3" />
      <p>Document 3</p>
    </div>
    <div className="upload-item more">
      <span className="more-icon">...</span>
      <p>More</p>
    </div>
  </div>
</div>

<div className="uploads-container">
  <h1>my favourites: </h1>
  <div className="items-container">
    <div className="upload-item">
      <img src={sample1} alt="Document 1" />
      <p>Document 1</p>
    </div>
    <div className="upload-item">
      <img src={sample2} alt="Document 2" />
      <p>Document 2</p>
    </div>
    <div className="upload-item">
      <img src={sample3} alt="Document 3" />
      <p>Document 3</p>
    </div>
    <div className="upload-item more">
      <span className="more-icon">...</span>
      <p>More</p>
    </div>
  </div>
</div>


      
  </div>

  

  );
}

export default App;
