import React from "react";
import {Link} from 'react-router-dom';
export default function Header(){
    return (
        <div className="header-container">
            <div className="header-wrap">
                <div className ="header-left-wrap">
                    <Link className ="header-nav-item" style={{display:'flex',alignItems: 'center'}}to="/">
                        {/* <img
                            style ={{width :"154px", height :"20px"}}
                            src ="logo.png"
                            alt ="로고"
                        /> */}
                        
                        <div className="titlelogo">
                        
                        <h2 >kolingo</h2>
                        </div>
                        
                    </Link>
                    <ul>
                        <li>
                            <Link className ="header-nav-item" to ='/sazi'>
                                사지선다
                                
                            </Link>
                        </li>
                        <li>
                            <Link className ="header-nav-item" to ='/test'>
                                받아쓰기
                            </Link>
                        </li>
                        <li>
                            <Link className ="header-nav-item" to ='/word'>
                                단어카드
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}