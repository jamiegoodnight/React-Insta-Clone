import React from 'react'
import login from '../../assets/login.png'



class Login extends React.Component {
    constructor(){
        super();
        this.state={
            email:"",
            password: ""
        }
    };
    handleLogin = e => {  
        this.setState({
            [e.target.name]: e.target.value
        })  
    };
    login = e => {
        e.preventDefault();
        localStorage.setItem("email", this.state.email);
        localStorage.setItem("password", this.state.password);
        window.location.reload();
    };
    render(){
        return(
            <div>
                <img src={login} alt="Mobile phones displayed"/>
                <form onSubmit={props.login}>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password" min="8"/>
                    <button>login</button>             
                </form>
            </div>
        )
    }
}   

// const Login = () => {
//     return (
//         <div className="login">
//             <img src={login} alt="Mobile phones displayed"/>
//             <form onSubmit={props.login}>
//                 <input type="email" placeholder="email"/>
//                 <input type="password" placeholder="password" min="8"/>
//                 <button>login</button>
//             </form>
//         </div>
//     )
// }

export default Login