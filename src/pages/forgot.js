import React from 'react'

function Forgot() {
    const [state, setState] = React.useState("")
    async function reset(e) {
        e.preventDefault();
        let small=document.getElementById("notify");
        small.innerText="";
        let email=document.getElementById("user_name").value;
        if(email.length===0){
          small.innerText="Field can't be left blank";
        }
        else if(email.length >0 && email.indexOf("@")===-1){
          small.innerText="Please Enter Valid Email";
        }
        else{
         var r=await fetch("https://password-resetb.herokuapp.com/check",{
          method:"POST",
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          },
          body:JSON.stringify({email})
         })
         var txt=await r.text()
         setState(txt)
         document.getElementById("alert-forgot").style.display="block";
         setTimeout(()=>{
            document.getElementById("alert-forgot").style.display="none";
         },1500)
         if(r.status===200){
             document.getElementById("user_name").value="";
             document.getElementById("resetbutton").disabled=true;
         }
        }
      }
    return (
        <>
        <div className="container-fluid">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <form onSubmit={reset}>
            <div class="form-group">
              <label htmlFor="user_name">Email address</label>
              <input
                type="text "
                className="form-control"
                id="user_name"
              />
              <small id="notify" style={{color:"red"}}></small>
            </div>
            <button type="submit" id="resetbutton" className="btn btn-primary">Reset</button>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
      <div id="alert-forgot" style={{textAlign:"center",position:"fixed",bottom:"30px",left:"35%",width:"auto",color:"antiquewhite",borderRadius:"25px",padding:"10px",backgroundColor:"darkslategray",display:"none"}}>{state}</div>
      </>
    )
}

export default Forgot