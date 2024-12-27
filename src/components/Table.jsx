import React from "react";

function Table(users) {
  return (
    <>
      <div className="container pb-5">
        <h1 className="text-center mb-5">User Data</h1>
        <table className="table table-striped table-hover border border-secondary-subtle p-5">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {users.userData.length > 0 ? (
              users.userData.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                </tr>
              ))
            ) : (
              <tr>
                <th colSpan={4} className="text-center">There is no user data.</th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
