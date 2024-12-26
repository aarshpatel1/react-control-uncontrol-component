import React, { useState } from 'react'
import Table from './Table'

function Form() {
    const [user, setUser] = useState({})
    const [users, setUsers] = useState([])

    const handleChange = (e) => {
        e.preventDefault()
        let { name, value } = e.target
        setUser({ ...user, [name]: value })
        console.log(user)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setUsers([...users, user])
        e.target.reset()
        console.log(users)
    }

    return (
        <>
            <h1 className='text-center mt-5'>Entry Form</h1>
            <div className="d-flex align-items-center justify-content-center py-5 border-bottom border-secondary-subtle">
                <form method="post" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username: </label>
                        <input type="text" className="form-control" name='username' id="username" placeholder="username" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email: </label>
                        <input type="email" className="form-control" name='email' id="email" placeholder="xyz@email.com" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password: </label>
                        <input type="password" className="form-control" name='password' id="password" onChange={handleChange} />
                    </div>
                    <button className='btn btn-secondary mt-3'>Submit</button>
                </form>
            </div>

            <Table userData={users} />
        </>
    )
}

export default Form
