import React from "react";
import Quiz from "../components/Quiz";
import profile from './profile.png';


export default function Home(){
    
    return (
        <div className="page-containter" style={{fontSize:'32px'}}>Home
        <div className="pro">
            <img src={profile} alt="profile"/>
        </div>
        <Quiz/>
        
        </div>
        
    );
  
}

