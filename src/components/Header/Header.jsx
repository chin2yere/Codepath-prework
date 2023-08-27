import * as React from "react";
import "./Header.css";

export default function Header({ setViewAll }) {
  function changeToViewAll() {
    setViewAll(true);
  }
  function changeToCreate() {
    setViewAll(false);
  }

  return (
    <div className="header">
      <h1 className="h1-header">CREATORVERSE</h1>
      <div>
        <button onClick={() => changeToViewAll()} className="button-header">
          VIEW ALL CREATORS
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => changeToCreate()} className="button-header">
          ADD A CREATOR
        </button>
      </div>
    </div>
  );
}
