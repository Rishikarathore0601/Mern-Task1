import React ,{useEffect, useState} from "react"
import axios from "axios"
import {useNavigate, Link} from "react-router-dom"

function Login(){
    const history=useNavigate();
    const[email,setEmail]=useState(' ')
    const[password,setPassword]=useState(' ')
    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("https://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data="exist"){
                    history("/home")

                }else if(res.data="nonexist"){
                    alert("Invalid User")
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
        <div className="login">
            <h1>Login</h1>
            <form action="POST">
                <input type="email" onChange={(e)=>{setEmail(e.ta
                .value)}} placeholder="Enter Email"/>
                <input type="password" onChange={(e)=>{setPassword(e.ta
                .value)}} placeholder="Enter Password"/>
                <input type="submit" onClick={submit}/>

            </form>
            <br/>
            <p>OR</p>
        </div>
    )
}
export default Login