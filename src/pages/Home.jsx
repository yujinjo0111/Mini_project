import React from "react";
import Quiz from "../components/Quiz";
import profile from './profile.png';


export default function Home(){
    
    return (
        <div className="page-containter" style={{fontSize:'32px'}}>Home
        {/* <div className="pro">
            <img src={profile} alt="profile"style={{width: '150px', height: '150px'}}/>
            
        </div> */}
        <Quiz/>
        
        </div>
        
    );
  
}

