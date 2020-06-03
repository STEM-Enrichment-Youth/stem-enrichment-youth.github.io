import React, {useState} from "react"; 
import Axios from "axios"; 
import './login.css'; 

const pStyle = {
  fontWeight: "300", 
  fontSize: "17px"
}

const inputStyle = {boxShadow: "5px 5px 10px black", 
fontWeight: "400",
color: "white", 
fontSize: "15px"}

export default function App(props) {
  return (
      <div class="body" style={{color: "white"}}>
      
        <div class="main-login">
          <p class="sign" align="center" style={{fontWeight: "300", fontSize: "50px", textAlign: "center", color: "white"}}>{props.title}</p>
          <form class="form1" method="POST" action={props.formURL} style={{paddingTop: "20px"}}>
              <input class="un " type="text" align="center" name="username" placeholder="Username or Email" style={inputStyle}/>
              <input class="pass" type="password" align="center" name="password" placeholder="Password" style={inputStyle}/>
              <button class="submit" type="submit" align="center">Submit</button>
              <p class="forgot" align="center" style={pStyle}><a href="#"/>{props.forgot}</p>
          </form>
          <p align="center" style={{marginTop: "10%", fontSize: "15px", ...pStyle}}>{props.OAuth}</p>
          <button align="center" type="button" class="soc-btn btn-fb"><i class="fab fa-facebook-f pr-1"></i>Facebook</button>
          <button align="center" type="button" class="soc-btn btn-google"><i class="fab fa-google pr-1"></i>Google</button>

        </div>
      </div>
  
  );
}

/*
<div class="container mt-5">

        <div class="row">
            <div class="col-sm-8">
              <div class="card">
                <div class="card-body">
                  <form method="POST" action="http://localhost:3001/login">
                    <h1>Login</h1>
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input type="email" class="form-control" name="username"/> 
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input type="password" class="form-control" name="password"/>
                    </div>
                    <button type="submit" class="btn btn-dark">Login</button>
                 </form>

                </div>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="card social-block">
                <div class="card-body">
                    <a class="btn btn-block btn-social btn-google" href="http://localhost:3001/auth/google" role="button">
                      <i class="fab fa-google"></i> Sign Up with Google
                    </a>
                </div>
              </div>
            </div>
          </div>
    </div>
     */