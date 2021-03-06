import React from 'react';


const Navigation = ({onRouteChange, isSignedIn}) => {

        if(isSignedIn){
        return(
        <nav style={{display : 'flex', 'justifyContent' : 'flex-end'}}>
            <p onClick={ () => onRouteChange("signout")} className='f3 link dim black underline p3 pointer'>Signout</p>
        </nav>
        )
        } else {
        return (
                <nav style={{display : 'flex', 'justifyContent' : 'flex-end'}}>
                     <p onClick={ () => onRouteChange("sigin")} className='f3 link dim black underline p3 pointer'>Signin</p>
                     <p onClick={ () => onRouteChange("register")} className='f3 link dim black underline p3 pointer'>Register</p>
                </nav>
        )
     }
}

export default Navigation