import React from "react";
import {useLocation, useNavigate} from 'react-router-dom';

function Home(){
    const location=useLocation()
    return(
        <div className="homepage">
            <h3>Candidate Page</h3>
        </div>
    )
}
export default Home