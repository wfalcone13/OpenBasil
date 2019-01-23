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
    this.props.processFrom(user)
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
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to OpenBasil!
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className='login-form'>
            <br/>
            <label>
              Email
              <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input"/>
            </label>
            <br/>
            <label>
              Password 
              <input type="password" value={this.state.password} onChange={this.update('password')} className='login-input'/>
            </label>
            <br/>
            <input type="submit" value={this.props.formType} className="session-submit"/>
          </div>
        </form>
      </div>
    )
  }

}

export default SessionForm;