import React from "react"
import {useLocation, useNavigate} from 'react-router-dom';

function Home2 (){
    const location=useLocation()

    return (
        <div className="homepage">

            <h1>Hello {location.state.id} and welcome to the home2</h1>

        </div>
    )
}

export default Home2