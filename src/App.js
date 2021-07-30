import React from "react";
import { useState } from "react";
import Forgot from "./pages/forgot";
import Register from "./pages/register";
function App() {
  const [view,setView]=useState(0)
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Forgot Password</h1>
          <p className="lead">
            Enter the user id and click forgot password to reset password. <b>Note:</b>Register your Email first to get Email from Nodemailer.
          </p>
        </div>
      </div>
      <div class="btn-group" role="group" aria-label="Basic example" >
        <button type="button" onClick={()=>setView(0)} class="btn btn-outline-info">Forgot</button>
        <button type="button" onClick={()=>setView(1)}class="btn btn-outline-info" style={{marginLeft:"5px"}}>Register</button>
      </div>
      <div>
        {view===0?<Forgot/>:""}
        {view===1?<Register/>:""}
      </div>
    </>
  );
}

export default App;
