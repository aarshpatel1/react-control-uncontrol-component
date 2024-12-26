import React from 'react'

function Table(users) {
    return (
        <>
            <div className="container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.userData.map((user, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >

        </>
    )
}

export default Table
