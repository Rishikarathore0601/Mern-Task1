import React,{useEffect,useState} from "react"
import axios from "axios"
import { useNavigate,Link } from "react-router-dom"

function SignUp(){
    
    const history=useNavigate();
    const[email,setEmail]=useState(' ')
    const[phoneno,setPhone]=useState(' ')
    const[password,setPassword]=useState(' ')
    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("https://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data="exist"){
                   alert("User already Exists")

                }else if(res.data="nonexist"){
                    history("/home")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e)
            })
        }
        catch(e){
            console.log(e);
        }

    }
    return(
        <div className="signup">
            <h1>SignUp</h1>
            <form action="POST">
                <input type="email" onChange={(e)=>{setEmail(e.ta
                .value)}} placeholder="Enter Email"/>
                 <input type="tel" onChange={(e)=>{setPhoneNo(e.ta
                .value)}} placeholder="Enter PhoneNo"/>
                <input type="password" onChange={(e)=>{setPassword(e.ta
                .value)}} placeholder="Enter Password"/>
                <input type="submit" onClick={submit}/>

            </form>
            <br/>
            <p>OR</p>
            <link to="/">Login Page</link>
        </div>
    )
}
export default SignUp