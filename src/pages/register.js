import React, { useEffect, useState } from 'react'

function Register() {
    const [state, setState] = useState("")
    const [notify, setNotify] = useState("")
    const [notify1, setNotify1] = useState("")
    const handleSubmit=async (e)=>{
        e.preventDefault();
        let sendData={userid:document.getElementById("user_name").value,password:document.getElementById("pass").value};
        var r=await fetch("https://password-resetb.herokuapp.com/register",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(sendData)
        })
        var resp=await r.text()
        setState(resp)
        document.getElementById("alert-forgot").style.display="block";
         setTimeout(()=>{
            document.getElementById("alert-forgot").style.display="none";
         },1500)
        document.getElementById("user_name").value="";
        document.getElementById("pass").value="";
    }
    useEffect(() => {
        document.getElementById("pass").addEventListener("keyup",(e)=>{
            if(e.target.value.length<=8){
                setNotify("Password Length should be greater than 8")
                document.getElementById("createButton").disabled=true;
            }else{
                setNotify("")
                document.getElementById("createButton").disabled=false;
            }
        })
        document.getElementById("user_name").addEventListener("keyup",(e)=>{
            if(e.target.value.length==0 || e.target.value.indexOf("@")===-1){
                setNotify1("Please enter valid email")
                document.getElementById("createButton").disabled=true;
            }else{
                setNotify1("")
                document.getElementById("createButton").disabled=false;
            }
        })
        
    }, [])
    return (
        <>
        <div className="container-fluid">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label htmlFor="user_name">Email address</label>
              <input
                type="text "
                className="form-control"
                id="user_name"
              />
              <small>{notify1}</small>
            </div>
            <div class="form-group">
              <label htmlFor="pass">Password</label>
              <input
                type="password"
                className="form-control"
                id="pass"
              />
              <small>{notify}</small>
            </div>
            <button type="submit" id="createButton" className="btn btn-primary" disabled>Create Account</button>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
      <div id="alert-forgot" style={{textAlign:"center",position:"fixed",bottom:"30px",left:"35%",width:"auto",color:"antiquewhite",borderRadius:"25px",padding:"10px",backgroundColor:"darkslategray",display:"none"}}>{state}</div>
      </>
    )
}

export default Register
