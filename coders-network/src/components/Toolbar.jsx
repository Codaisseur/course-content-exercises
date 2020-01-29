import React from "react";
import { Link } from "react-router-dom";

const Toolbar = () => {
  return (
    <div
      style={{
        display: "flex",
        color: "black",
        opactity: "0.7",
        justifyContent: "space-between",
        padding: "15px"
      }}
    >
      <Link to='/'>Homepage</Link>
      <Link to='/developers'>Developers List</Link>
    </div>
  );
};

export default Toolbar;
