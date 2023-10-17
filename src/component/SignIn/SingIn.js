import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SingIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const Navigate = useNavigate();

    // const url = "mongodb+srv://bhanupratap04123:rieocQN2ePiBBJ5u@cluster0.1j9ymic.mongodb.net/?retryWrites=true&w=majority";

    const btnHandleSignin = async () => {
        // console.log(email, password);

        if (!email || !password) {
            setError(true)
            return false
        }

        let data = await fetch("https://todo-list-backend-eqk4.onrender.com/signin", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })

        data = await data.json();

        localStorage.setItem('token', JSON.stringify(data.auth));
        localStorage.setItem('user',JSON.stringify(data.data));

        if (data.auth) {
            alert("Login Successfully...!");
            Navigate("/todo");
        } else {
            alert("Incorrect input");
        }

    }
    return (
        <div>
            <div className="userLogin">
                <h2>Login</h2>
                <input type="text" placeholder="Enter Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                {error && !email && <span className="errorMsg">Email is required</span>}
                <input type="text" placeholder="Enter Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                {error && !password && <span className="errorMsg">Password is required</span>}

                <button className="btnLogin" onClick={btnHandleSignin}>SignIn</button>
            </div>
        </div>
    )
}

export default SingIn;