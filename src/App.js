import React from "react";
import stopSign from "./stop-sign.png";
import "./App.css"

function App() {
  return (
    <div className="outer-container">
      <div className="content-container">
        <img src={stopSign} alt="stop sign" />
        <h1>Deceptive site ahead</h1>
        <p>
          Attackers on <strong>iwouldnotclickthislink.ml</strong> may trick 
          you into doing some crazy shit like installing software or revealing 
          your personal information (for example, passwords, phone numbers, or credit cards).
        </p>
        <form>
          <input type="checkbox" name="fake-checkbox" />
          <label htmlFor="fake-checkbox">
            &nbsp;
            Automatically report details of possible security incidents to Foogle.
            &nbsp;
            <a href="https://haveibeenpwned.com/" rel="noreferrer"target="_blank">
              Privacy policy
            </a>
          </label>          
        </form>
        <div className="flex-row-apart">
          <a href="https://haveibeenpwned.com/" rel="noreferrer"target="_blank">
            Details  
          </a>
          <a href="https://joebiden.com/presidency-for-all-americans/" rel="noreferrer"target="_blank">
            <button>
              Back to safety
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
