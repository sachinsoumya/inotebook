import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
const surl = "https://notebookback.onrender.com"

const Signup = (props) => {
    const [credentials, setcredentials] = useState({name:'',email: '' , password:'' ,cpassword:''})
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name, email, password} = credentials;
        const response = await fetch(`${surl}/api/auth/createuser`, {
          
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                //"auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiYWVhMDRkMjQyOWYxNTI2NWZkYTZhIn0sImlhdCI6MTYzOTcyMDIyNX0.2QmAFxOkIQ2NfdnM9oAGE_irzdeVrlGzoNwK4amkUDA"
            },
            body: JSON.stringify({ name , email ,password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            //save the auth token and redirect it
            localStorage.setItem('token' , json.authtoken);
            history.push("/");
            props.showAlert("Account created Sucessfully","successs")

        }
        else{
            props.showAlert("Invalid Details","danger")
        }

    }


    const onChange = (e) => {
        console.log('event');
        //console.log(credentials);
        setcredentials({...credentials, [e.target.name]: e.target.value });
        

    }
    return (
        <div className='container mt-3'>
            <h2 className='m-3'>Signup to continue iNotebook</h2>
            <form onSubmit={handleSubmit} >
                <div className="mb-3 my-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control border-primary" id="name"  name="name" onChange={onChange} aria-describedby="emailHelp"  />
                        
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control border-primary" id="exampleInputEmail1"  name="email" onChange={onChange} aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control border-primary" id="password"  name="password" onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control border-primary" id="cpassword"  name="cpassword" onChange={onChange} minLength={5} required />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
