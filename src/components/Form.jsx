import React, { useState, useEffect } from "react";
import Table from "./Table";

function Form() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, user]);
    setUser({});
    e.target.reset();
  };

  return (
    <>
      <h1 className="text-center mt-5">Entry Form</h1>
      <div className="d-flex align-items-center justify-content-center py-5">
        <form
          method="post"
          onSubmit={handleSubmit}
          className="border border-secondary-subtle p-5 rounded-3"
        >
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              name="username"
              id="username"
              value={user.username || ""}
              placeholder="username"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              value={user.email || ""}
              placeholder="xyz@email.com"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              value={user.password || ""}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-secondary mt-3">
            Submit
          </button>
        </form>
      </div>

      <Table userData={users} />
    </>
  );
}

export default Form;
