import React from 'react';
import './styles.css';
import CASI from '../assets/casi_404.png'
import { Link } from 'react-router-dom';
  
const PageNotFound = () =>{
    const redirectHome = () => {
        
    }
    return(
    <div className='container container__notfound'>
        <h1>404 Error</h1>
        <h4>Sorry this page is not found! I'm probably still working on it :) <br/> In the meantime, here is a picture of my dog Casi to brighten your day 😅</h4>
        <div className='notfound-image'>
            <img src={CASI} alt="Casi" onClick={()=>{redirectHome()}}/>
        </div>
          <Link className="go__home"to="/">Go to Home </Link>
    </div>
    )
}
  
export default PageNotFound;