import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../App.js";

const NAME_EX = /^[a-zA-Z0-9_\.]*$/;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function TitlePage() {
  const [name, setName] = useState("Clicker");
  const [clicks, setClicks] = useState(0);

  function updateClick() {
    if (name.length <= 0) {
      return;
    }

    let newClicks = clicks + 1;
    if (clicks === 0) {
      fetch(`${API_URL}/clicks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: name, clicks: newClicks }),
      });
    } else {
      fetch(`${API_URL}/clicks/${name}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: name, clicks: newClicks }),
      });
    }

    setClicks(newClicks);
  }

  function loadClicks(name) {
    if (name === undefined || name.length === 0) {
      setClicks(0);
      return;
    }

    fetch(`${API_URL}/clicks/${name}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((json) => {
        if (json === undefined) {
          setClicks(0);
          return;
        }

        let clicks = json["clicks"];

        if (clicks === undefined) {
          setClicks(0);
          return;
        }

        setClicks(clicks);
      });
  }

  function updateName(e) {
    e.preventDefault();

    let name = e.target.value;

    if (NAME_EX.test(name)) {
      setName(name);
    }

    loadClicks(name);
  }

  useEffect(() => loadClicks(name), []);

  return (
    <>
      <div className="center-container">
        <h1>Clicks</h1>
        <div className="main-area">
          <div className="button-container">
            <button className="the-button" onClick={updateClick}>
              {numberWithCommas(clicks)}
            </button>
          </div>
          <div className="">
            <input
              type="text"
              className="the-name"
              onChange={updateName}
              value={name}
              placeholder="Your Name: Clicker"
            />
          </div>
        </div>
        <div>
          <div className="countering-as">
            {name.length > 0
              ? `Countering as ${name}.`
              : "Please enter your name."}
          </div>
          <div className="footer-navigation">
            <span className="navigation-button">
              <Link to="/rank">🥇</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TitlePage;
