import { useState, useEffect } from "react";
import { API_URL } from "../App.js";

function Leaderboard() {
  let [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/clicks?_sort=-clicks&_limit=20`)
      .then((response) => response.json())
      .then((json) => {
        setLeaderboard(json);
      });
  }, []);

  return (
    <table className="leaderboard-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Clicks</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {leaderboard.map((leader, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{leader["clicks"]}</td>
            <td>{leader["id"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Leaderboard;
