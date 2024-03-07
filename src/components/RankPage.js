import { Link } from "react-router-dom";
import Leaderboard from "./Leaderboard.js";

function RankPage() {
  return (
    <>
      <div className="center-container">
        <div className="header-naviation">
          <span className="navigation-button">
            <Link to="/clicks">⬅️</Link>
          </span>
        </div>
        <h1>Leaderboard</h1>
        <Leaderboard />
      </div>
    </>
  );
}

export default RankPage;
