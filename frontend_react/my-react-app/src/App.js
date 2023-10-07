import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "./App.css";
import sample1 from "./images/imagen 1.png";
import sample2 from "./images/imagen 2.png";
import sample3 from "./images/imagen 3.png";
import UserView from "./UserView"
import MainView from "./MainView";
//import GroupView from "./Groups/GroupView"
//import VisualizerView from "./visualizerView"
//import AssignmentView from "./Assignments/assignmentView";
//import EvaluationView from "./Evaluation/evaluationView";

function App() {

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
        <NavBar setMenuState={setMenuState}/>
        {menuState === 0 && (
        <>
            <MainView />
        </>
        )}
        {menuState === 1 && (
        <>
            <UserView />
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
   
  </div>

  

  );
}

export default App;
