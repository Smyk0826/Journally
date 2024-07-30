import react, { useState } from "react";
import Title from "./Title";
import axios from "axios";
import Popup from "./popup";

function SignInPage(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [popuptrigger, setpopupTrigger] = useState(false);
    const [errMess, seterrMess] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
            axios.post('http://localhost:3001/signin', {
                username,
                email,
                password,
            }).then(response => {
                seterrMess('Account succesfully registered');
                setpopupTrigger(true);
                console.log('Status Code:', response.status);
              })
              .catch(error => {
                if (error.response.status === 401) {
                  seterrMess('Email already registered with other account');
                  setpopupTrigger(true);
                  console.log('Error Status Code:', error.response.status);
                }
                else if(error.response.status === 402){
                    seterrMess('All fields are mandatory');
                    setpopupTrigger(true);
                }
                else{
                    seterrMess('There was a issue while registering account');
                    setpopupTrigger(true);
                } 
              });
    };
return(
    <div>
    <div className="TitleBar">
        <div>
        <Title/>
        </div>
        <div className="buttonBox">
        </div>
    
    </div>
        <div>
        <h2 className="Gratitude">Welcome!</h2>
            <form onSubmit={handleSubmit}>
            
            <div className="TextWriting">

            <div className="form-group">
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your name" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="password" class="TextArea form-control" id="exampleFormControlInput1" placeholder="Password"  value={password}  onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="submit btn btn-dark">Sign In</button>
            </div>
            <Popup trigger={popuptrigger} setTrigger = {setpopupTrigger}>
                <h3>{errMess}</h3>
            </Popup>
            </form>
        </div>
    </div>
    );
}

export default SignInPage;