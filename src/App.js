import "./App.css";
import { Route, Routes } from "react-router-dom";
import Todo from "./Dashboard/Todo/Todo";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Dashboard/Login/Login";
import BmiCalc from "./Dashboard/BmiCalculator/BmiCalc";
import Game from "./Dashboard/Game/Game";
import Weather from "./Dashboard/Weather/Weather";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/bmicalc" element={<BmiCalc />} />
        <Route path="/game" element={<Game />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
