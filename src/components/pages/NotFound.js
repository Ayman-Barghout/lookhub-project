import React from "react";

const NotFound = ({ location }) => {
  return (
    <div className="hero notfound">
      <h1>404 </h1>
      <h2>{location.pathname} doesn't exist</h2>
    </div>
  );
};

export default NotFound;
