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
          <h3>Welcome to OpenBasil!</h3>
          {this.renderErrors()}
          <div className="signup-form">
            <input type="text" value={this.state.first_name} className="signup-input" onChange={this.update('first_name')} placeholder='First Name *' />
            <input type="text" value={this.state.last_name} className="signup-input" onChange={this.update('last_name')} placeholder="Last Name *"/>
            <input type="text" value={this.state.email} onChange={this.update('email')} className="signup-input" placeholder="Enter email *" />
            <input type="password" value={this.state.password} onChange={this.update('password')} className='signup-input' placeholder=" Enter password *" />
            <input type="password" value={this.state.password} onChange={this.update('password')} className='signup-input' placeholder="Re-Enter password *" />
              <select name="Location" className='location-input'>
                <option value="Location" selected>Primiary Dining Location *</option>
                <option value="NYC">NYC</option>
                <option value="Brooklyn">Brookly</option>
                <option value="Australian">Australian</option>
                <option value="Im not telling you!">Im not telling you!</option>
              </select>  
            <input type="submit" value={this.props.formType} className="signup-submit" value="Create Account"/>
            </div>
        </form>
          <div className="social-signup-box">
              <p>Want Facebook to know where you eat?</p>
              <div className="social-signups">
                  <button>
                    <img src="" alt=""/>
                    Continue with Facebook
                  </button>
                  <button>
                    <img src="" alt=""/>
                    Continue with Google
                  </button>
              </div>
          </div>
      </div>

      )

    }else{
      return (
      
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h3>Please sign in</h3>
          {this.renderErrors()}
          <div className='login-form'>
              <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input" placeholder="Email"/>
            <br/>
              <input type="password" value={this.state.password} onChange={this.update('password')} className='login-input' placeholder="Password" />
            <br/>
              <a href="" className='fpassword'>Forgot Password?</a>
            <input type="submit" value={this.props.formType} className="login-submit" value='Sign In'/>
          </div>
        </form>
        
      </div>
    )
  }}

}

export default SessionForm;