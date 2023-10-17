import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    // const url = "mongodb+srv://bhanupratap04123:rieocQN2ePiBBJ5u@cluster0.1j9ymic.mongodb.net/?retryWrites=true&w=majority";

    const btnHandleSignup = async () => {
        // console.log(name, email, password);

        if (!name || !email || !password) {
            setError(true);
            return false;
        }

        let result = await fetch("http://localhost:3800/signup", {

            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' }
        })

        result = await result.json();
        if (result) {
            alert("SignUp Successfully...!");
            console.log(result)
            setName('');
            setPassword('');
            setEmail('');

            navigate("/signin");
        } else {
            alert("Some Error");
        }
    }
    return (
        <div>
            <div className="userRegister">
                <h2>User Register</h2>
                <input type="text" placeholder="Enter User Name" required value={name} onChange={(e) => setName(e.target.value)} />
                {error && !name && <span className="errorMsg">Name is required</span>}
                <input type="text" placeholder="Enter Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                {error && !email && <span className="errorMsg">Email is required</span>}
                <input type="text" placeholder="Enter Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                {error && !password && <span className="errorMsg">Password is required</span>}

                <button className="btnSignup" onClick={btnHandleSignup}>SignUp</button>
            </div>
        </div>
    )
}

export default SignUp;