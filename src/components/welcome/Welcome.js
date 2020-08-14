import React from "react";

function Welcome(props) {
  return (
    <div className="Welcome">Welcome, {props.match.params.dataEntered}!</div>
  );
}

export default Welcome;
