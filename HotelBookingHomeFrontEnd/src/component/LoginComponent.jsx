import React, { useEffect, useState } from 'react'
import { login, register, setToken, setUserId, setUserNameOrEmails, setUserRole } from '../service/AuthService';
import { useLocation, useNavigate, useParams } from 'react-router';
import { RiFacebookFill, RiGithubFill, RiGoogleFill, RiLoginBoxLine, RiSignpostLine, RiTwitterXFill } from '@remixicon/react';

export default function LoginComponent() {

    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [usernameOrEmail, setUserNameOrEmail] = useState();
    const [password, setPassword] = useState(); 

    const [letter, setLetter] = useState();

    const nevigate = useNavigate();
    const {id} = useParams();

    const {hash} = useLocation();

    const [errorForRegisteration, setErrorForRegisteration] = useState({
        name: true,username: true ,email:true,phoneNumber:true,password:true
    });

    const [errorForLogin, setErrorForLogin] = useState({
        usernameOrEmail:true, password: true
    })

    const checkLoginForm = () => {
        var vaild = true;
        const errCopy = {...errorForLogin};
        if(usernameOrEmail.trim() != '' || usernameOrEmail.endsWith("@gmail.com")) {
            errCopy.usernameOrEmail = true;
        }else {
            errCopy.usernameOrEmail = false;
            vaild = false;
        }
        if(password.trim() != '') {
            errCopy.password = true;
        }else {
            errCopy.password = false;
            vaild = false
        }
        setErrorForLogin(errCopy);
        return vaild
    }

    const checkErrorForRegisteration = () => {
        var vaild = true;
        const errCopy = {...errorForRegisteration};
        if(name.trim() != '') {
            errCopy.name = true;
        }else {
            errCopy.name = false;
            vaild = false;
        }
        if(username.trim() != '') {
            errCopy.username = true;
        }else {
            errCopy.username = false;
            vaild = false;
        }
        if(email.trim() != '' && email.endsWith("@gmail.com")) {
            errCopy.email = true;
        }else {
            errCopy.email = false;
            vaild = false;
        }if(phoneNumber.trim() != '') {
            errCopy.phoneNumber = true;
        }else {
            errCopy.phoneNumber = false;
            vaild = false;
        }if(password.trim() != '') {
            errCopy.password = true;
        }else {
            errCopy.password = false;
            vaild = false;
        }
        
        setErrorForRegisteration(errCopy);
        return vaild;
    }

    useEffect(() => {
        if(name) {
            errorForRegisteration.name = true;
        }
        if(username) {
            errorForRegisteration.username = true;
        }
        if(email) {
            errorForRegisteration.email = true;
        }
        if(phoneNumber) {
            errorForRegisteration.phoneNumber = true;
        }
        if(password) {
            errorForRegisteration.password = true;
        }
    },[name, username, email, phoneNumber, password])   
    
    useEffect(() => {
        if(usernameOrEmail) {
            errorForLogin.usernameOrEmail = true;
        }
        if(password) {
            errorForLogin.password = true;
        }
    },[usernameOrEmail, password])

    useEffect(() => {
        if(hash) {
            const element = document.getElementById(hash.substring(1));
            if(element) {
                A(true);
                element.scrollIntoView({ behavior : "smooth"});
            }
        }else {
            A(false)
        }
    },[hash]);
    
    const registerUser = (e, t) => {
        e.preventDefault();
        if(checkErrorForRegisteration()) {
            const registerObj = {name, username, password, email, phoneNumber};
            console.log(registerObj)
            A(t);
            register(registerObj).then(res => setLetter(res.data)).catch(err => console.log(err));
        }
        
    };

    const loginUser = (e) => {
        e.preventDefault();
        if(checkLoginForm()) {
            const loginObj = {usernameOrEmail, password};
            console.log(loginObj)
        login(loginObj).then(res => setTokenAndUserIdAndRole(res.data)).catch(err => console.log(err));
        }
    }

    const setTokenAndUserIdAndRole = (resLoginObj) => {
        const token = "Bearer " + resLoginObj.token;
        setToken(token);
        setUserNameOrEmails(usernameOrEmail);
        setUserId(resLoginObj.userId);
        setUserRole(resLoginObj.userRole);
        if(id > 0) {
            nevigate("/room-detail/" + id);
        }else {
            nevigate("/");
        }
        window.location.reload(false);
    }

    const [a, seta] = useState("");

    const A = (e) => {
        if(e) {
            seta('active');
        }else {
            seta('');
        }
    }



    return (
        <>
            <div className='Lg'>
                <div className={`container1 ${a}`} id="container1">
                    <div className="form-container sign-In">
                        <form>
                            <h1>Create Account</h1>
                            <div className="social-icons">
                                <a href="" className="icon"><RiFacebookFill size={17}/></a>
                                <a href="" className="icon"><RiGoogleFill size={17}/></a>
                                <a href="" className="icon"><RiTwitterXFill size={17}/></a>
                                <a href="" className="icon"><RiGithubFill size={17}/></a>
                            </div>
                            <span>or use your email for registeration</span>
                            <input type="text" placeholder="Name" className={errorForRegisteration.name == false  ? 'flashing' : 'borderless'} value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="text" placeholder="UserName" className={errorForRegisteration.username == false  ? 'flashing' : 'borderless'} value={username} onChange={(e) => setUserName(e.target.value)} />
                            <input type="email" placeholder="Email" className={errorForRegisteration.email == false  ? 'flashing' : 'borderless'} value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="text" placeholder='PhoneNumber' className={errorForRegisteration.phoneNumber == false  ? 'flashing' : 'borderless'} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                            <input type="password" placeholder='password' className={errorForRegisteration.password == false  ? 'flashing' : 'borderless'} value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <button onClick={(e) => registerUser(e, true)}><RiSignpostLine size={14}/> Sign In</button>
                        </form>
                    </div>
                    <div className="form-container sign-up" id="log">
                        <form>
                            <h1>Login</h1>
                            <div className="social-icons">
                                <a href="" className="icon"><RiFacebookFill size={17}/></a>
                                <a href="" className="icon"><RiGoogleFill size={17}/></a>
                                <a href="" className="icon"><RiTwitterXFill size={17}/></a>
                                <a href="" className="icon"><RiGithubFill size={17}/></a>
                            </div>
                            <span>use your UserName/Email password</span>
                            <span style={{color: 'green'}}>{letter}</span>
                            <input type="text" placeholder="UserNameOrEmail" className={errorForLogin.usernameOrEmail == false  ? 'flashing' : 'borderless'} value={usernameOrEmail} onChange={(e) => setUserNameOrEmail(e.target.value)}/>
                            <input type="password" placeholder="Password" className={errorForLogin.password == false  ? 'flashing' : 'borderless'} value={password} onChange={(e) => setPassword(e.target.value)} />
                            <a href="" style={{color: 'blue'}}>Forget Your Passwrod ?</a>
                            <button onClick={(e) => loginUser(e)}><RiLoginBoxLine size={14}/> Login</button>
                        </form>
                    </div>
                    
                    <div className="toggle-container">
                        <div className="toggle">
                            <div className="toggle-panel toggle-left">
                                <h1>WelCome Back!</h1>
                                <p>Enter Your Personal Details to use all of site features</p>
                                <button className="hidden" id="login" onClick={() => A(false)}><RiSignpostLine size={14}/> Sign In</button>
                            </div>
                            <div className="toggle-panel toggle-right">
                                <h1>Hello, Friend</h1>
                                <p>Register with your password details to use all of site features</p>
                                <button className="hidden" id="register" onClick={() => A(true)}> <RiLoginBoxLine size={14}/> Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
