import React from 'react'
import {Link} from 'react-router-dom'
function Home() {
    return (
        <div>
            <h1>Hello</h1>
            <Link to="/login" className="bg-blue-500"> Login</Link>
        </div>
    )
}

export default Home
