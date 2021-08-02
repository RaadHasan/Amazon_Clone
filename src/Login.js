import React,{ useState } from 'react';
import './login.css';
import {Link} from 'react-router-dom';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SignIn = e =>{
        e.preventDefault();
    }

    const register = e =>{
        e.preventDefault();

    }
    return (
        <div className="login">
            <Link to="/">
            <img className="login_logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon logo" />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email}  onChange={(e)=>setEmail(e.target.value)}/>

                     <h5>Password</h5>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                    <button className="login_sigin_btn" type="submit" onClick={SignIn}>Sign in</button>
                </form>

                <p> By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <h4>Dont have an account ? click here to creact one   
                <button className="login_register_btn" onClick={register}> Create your amazon account!</button>
                </h4>
               
            </div>
        </div>
    )
}

export default Login;
