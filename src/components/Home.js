import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const getvisit = localStorage.getItem("novisit");
    if (getvisit) {
      const count = parseInt(getvisit) + 1;
      localStorage.setItem("novisit", count);
    } else {
      localStorage.setItem("novisit", 1);
    }
  }, []);

  return (
    <div>
      <h1>Banner ID: B00929007</h1>
    </div>
  );
};

export default Home;
