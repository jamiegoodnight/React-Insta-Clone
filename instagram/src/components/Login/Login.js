import React from 'react'
import camLogo from '../../assets/login.png'

const Login = () => {
    return (
        <div>
            <img src={login} alt="Mobile phones displays"/>
            <form>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password" min="8"/>
                <button>login</button>
            </form>
        </div>
    )
}

export default Login