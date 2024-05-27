import React from "react";
import { useState, useEffect } from "react";

const Contact = () => {
  const [novisit, setvisit] = useState(0);
  useEffect(() => {
    const getvisit = localStorage.getItem("novisit");
    setvisit(parseInt(getvisit) + 1);
  }, []);

  return (
    <div>
      <h1>Welcome to Contact Page.</h1>
      <h2>Contact page visited {novisit} times.</h2>
    </div>
  );
};

export default Contact;
