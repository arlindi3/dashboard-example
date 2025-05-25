import "./Game.css";
import chess0 from "./assets/chess0.jpeg";
import chess1 from "./assets/chess1.jpeg";
import chess2 from "./assets/chess2.jpeg";
import chess3 from "./assets/chess3.jpeg";
import chess4 from "./assets/chess4.jpeg";
import chess5 from "./assets/chess5.jpeg";
import chess6 from "./assets/chess6.jpeg";
import chess7 from "./assets/chess7.jpeg";
import chess8 from "./assets/chess8.jpeg";
import chess9 from "./assets/chess9.jpeg";
import chess10 from "./assets/chess10.jpeg";
import chess11 from "./assets/chess11.jpeg";
import chess12 from "./assets/chess12.jpeg";
import chess13 from "./assets/chess13.jpeg";
import chess14 from "./assets/chess14.jpeg";

function Game() {
  // White and Black Moves making them true
  let Whitemove1 = true;
  let Whitemove2 = true;
  let Whitemove3 = true;
  let Whitemove4 = true;
  let Whitemove5 = true;
  let Whitemove6 = true;
  let Whitemove7 = true;

  let Blackmove1 = true;
  let Blackmove2 = true;
  let Blackmove3 = true;
  let Blackmove4 = true;
  let Blackmove5 = true;
  let Blackmove6 = true;
  let Blackmove7 = true;

  const whitePieces = () => {
    if (Whitemove1) {
      document.querySelector(".chess").src = chess1;
      Whitemove1 = false;
    } else if (Whitemove2) {
      document.querySelector(".chess").src = chess3;
      Whitemove2 = false;
    } else if (Whitemove3) {
      document.querySelector(".chess").src = chess5;
      Whitemove3 = false;
    } else if (Whitemove4) {
      document.querySelector(".chess").src = chess7;
      Whitemove4 = false;
    } else if (Whitemove5) {
      document.querySelector(".chess").src = chess9;
      Whitemove5 = false;
    } else if (Whitemove6) {
      document.querySelector(".chess").src = chess11;
      Whitemove6 = false;
    } else if (Whitemove7) {
      document.querySelector(".chess").src = chess13;
    }
  };

  // Black Piece function
  const blackPieces = () => {
    if (Blackmove1) {
      document.querySelector(".chess").src = chess2;
      Blackmove1 = false;
    } else if (Blackmove2) {
      document.querySelector(".chess").src = chess4;
      Blackmove2 = false;
    } else if (Blackmove3) {
      document.querySelector(".chess").src = chess6;
      Blackmove3 = false;
    } else if (Blackmove4) {
      document.querySelector(".chess").src = chess8;
      Blackmove4 = false;
    } else if (Blackmove5) {
      document.querySelector(".chess").src = chess10;
      Blackmove5 = false;
    } else if (Blackmove6) {
      document.querySelector(".chess").src = chess12;
      Blackmove6 = false;
    } else if (Blackmove7) {
      document.querySelector(".chess").src = chess14;
      alert("Congradulations Black Won");
    }
  };

  const restartBtn = () => {
    window.location.reload(true);
  };

  return (
    <html className="html-chess" lang="en">
      <body className="body-chess">
        <main className="main1">
          <h1 className="logo">Chess</h1>
          <h1 className="logo2">Game</h1>
          <section className="player player--0">
            <h2 className="name" id="name--0">
              PLAYER 1
            </h2>
            <button className="bttn btn--move" onClick={whitePieces}>
              ♟ Move
            </button>
          </section>
          <section class="player player--1">
            <h2 class="name" id="name--1">
              PLAYER 2
            </h2>
            <button class="bttn btn--move2" onClick={blackPieces}>
              ♟ Move
            </button>
          </section>
          <img src={chess0} alt="Playing Chess" class="chess" />
          <button class="bttn btn--restart" onClick={restartBtn}>
            ♟ Restart
          </button>
        </main>
      </body>
    </html>
  );
}

export default Game;
