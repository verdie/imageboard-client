import React from 'react'

export default class LoginForm extends React.Component {
    render(){
        return <div className="login">
        <form onSubmit={this.props.onSubmit}>
        <label>
            Email: 
            <input type="text" value={this.props.email} name='email' placeholder='Your email' onChange={this.props.onChange}/>
        </label>
        <label>
            Password: 
            <input type="text" value={this.props.password} name='password' placeholder='Your password' onChange={this.props.onChange}/>
        </label>
            <button type="submit">Login</button>
        </form>
        </div>
    }
}