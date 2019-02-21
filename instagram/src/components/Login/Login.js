import React from 'react'
import styled from 'styled-components';
import login from '../../assets/login.png'
import loginForm from '../../assets/loginForm.png'

const InstagramLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fafafa;
    `
const LoginForm = styled.form`
    width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    border: 1px solid lightgray;

        ${LoginForm} button {
            width: 134px;
            height: 22px;
            margin-top: 20px;
            background: #b1cc71;
            border-radius: 3px;
        }     
        `
const LoginInput = styled.input`
    margin: 10px auto;

        ${LoginInput}::placeholder {
            text-align: center;
        }

        ${LoginInput}:focus {
            outline: none;
            box-shadow: 0 0 10px #b1cc71;
        }
        `
        
class Login extends React.Component {
    constructor(props){
        super(props);
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
            <InstagramLogin>
                <img src={login} alt="Mobile phones displayed"/>
                <LoginForm onSubmit={this.login}>
                    <img src={loginForm} alt="Login display"/>
                    <LoginInput type="email"  value={this.state.email} name="email" placeholder="email" onChange={this.handleLogin}/>
                    <LoginInput type="password" value={this.state.password} name="password" placeholder="password" minlength="8" onChange={this.handleLogin}/>
                    <button>login</button>             
                </LoginForm>
            </InstagramLogin>
        )
    }
}   


export default Login