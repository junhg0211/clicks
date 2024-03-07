import { useState, useEffect } from "react";

function Leaderboard() {
  let [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/clicks?_sort=-clicks&_limit=10")
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
          <tr>
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
