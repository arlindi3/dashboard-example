import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <h1 className="dashboard">Dashboard</h1>
      <div className="oval-background"></div>
      <Link to="/todo" className="dashboard-app">
        <img
          src="https://cdn-icons-png.freepik.com/256/8476/8476658.png?semt=ais_hybrid"
          width="100px"
          height="100px"
        />
      </Link>

      <Link to="/bmicalc" className="dashboard-app">
        <img
          src="https://play-lh.googleusercontent.com/PmOnpf2uN_o-0Uoff75f4nppoNNRW3IX7HFEmnRsuSzCWeD3L0iixBtJ9lIAaCWcGA"
          width="100px"
          height="100px"
        />
      </Link>

      <Link to="/game" className="dashboard-app">
        <img
          src="https://www.chess.com/bundles/web/images/brand/chesscom_pawn.b51896bf.png"
          width="100px"
          height="100px"
        />
      </Link>

      <Link to="/weather" className="dashboard-app">
        <img
          src="http://clipart-library.com/img/963492.png"
          width="100px"
          height="100px"
        />
      </Link>
    </>
  );
}

export default Dashboard;
