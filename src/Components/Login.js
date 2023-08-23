import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const lurl = "https://notebookback.onrender.com"

const Login = (props) => {

    const [credentials, setcredentials] = useState({ email: '', password: '' })
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${lurl}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                //"auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiYWVhMDRkMjQyOWYxNTI2NWZkYTZhIn0sImlhdCI6MTYzOTcyMDIyNX0.2QmAFxOkIQ2NfdnM9oAGE_irzdeVrlGzoNwK4amkUDA"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            //save the auth token and redirect it
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Logged in created Sucessfully", "success")
            history.push("/");


        }
        else {
            props.showAlert("Invalid Credentials", "danger")
        }

    }


    const onChange = (e) => {
        console.log('event');
        //console.log(credentials);
        setcredentials({ ...credentials, [e.target.id]: e.target.value });


    }



    return (
        <div className='mt-3'>
            <h2 className='m-3'>Login to continue iNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control border-primary" value={credentials.email} onChange={onChange} id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control border-primary" value={credentials.password} onChange={onChange} id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
