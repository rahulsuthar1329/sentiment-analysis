import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <>
      <p className="title">Register Form</p>
      <form
        className="Register d-flex flex-column w-50 gap-5"
        onSubmit={handleSubmit}
      >
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" className="btn btn-primary" />
      </form>
    </>
  );
}

export default Register;
