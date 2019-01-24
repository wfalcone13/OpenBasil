import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      first_name: '',
      last_name: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    if (this.props.formType === 'signup'){
    this.props.processFrom(user)
    }else{
      this.props.login(user)
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => {
          return <li key={`error-${i}`}>
            {error}
          </li>
        } )}
      </ul>
    )
  }


  render(){

    if (this.props.formType === 'signup'){
      return(
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <p>Welcome to OpenBasil!</p>
            {this.renderErrors()}
          <input type="text" value={this.state.first_name} className="sign-input" onChange={this.update('first_name')} placeholder='First Name *' />
          <input type="text" value={this.state.last_name} className="sign-input" onChange={this.update('last_name')} placeholder="Last Name *"/>
          <input type="text" value={this.state.email} onChange={this.update('email')} className="sign-input" placeholder="Enter email *" />
          <input type="password" value={this.state.password} onChange={this.update('password')} className='signup-input' placeholder=" Enter password *" />
            <input type="password" value={this.state.password} onChange={this.update('password')} className='signup-input' placeholder="Re-Enter password *" />
          <input type="submit" value={this.props.formType} className="session-submit" placeholder="Create Account"/>

        </form>
      </div>

      )

    }else{
      return (
      
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <p>Please Sign in</p>
          {this.renderErrors()}
          <div className='login-form'>
              <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input" placeholder="Email"/>
            <br/>
              <input type="password" value={this.state.password} onChange={this.update('password')} className='login-input' placeholder="Password" />
            <br/>
            <input type="submit" value={this.props.formType} className="session-submit"/>
          </div>
        </form>
      </div>
    )
  }}

}

export default SessionForm;