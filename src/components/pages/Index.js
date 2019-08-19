import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="landing hero">
      <Link to="/users">
        <button>
          <i className="fas fa-users" /> Search users
        </button>
      </Link>
      <Link to="/issues">
        <button>
          <i className="fas fa-wrench" /> Search issues
        </button>
      </Link>
    </div>
  );
};

export default Index;
