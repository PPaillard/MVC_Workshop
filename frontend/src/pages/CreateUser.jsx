/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  return (
    <div className="flex justify-center w-screen">
      <form className="flex flex-col">
        <label>Name:</label>
        <input
          value={name}
          type="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Status:</label>
        <input value={status} onChange={(e) => setStatus(e.target.value)} />
      </form>
    </div>
  );
}
