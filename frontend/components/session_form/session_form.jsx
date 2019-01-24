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
                <option value="Australian">Australia</option>
                <option value="Im not telling you!">Im not telling you!</option>
              </select>  
            <label className="signup-checks"> 
              <input type="checkbox"/>
              I am an Admin Professional who books for others
            </label> 
              <label className="signup-checks">
              <input type="checkbox" />
              Remember me
            </label> 

            <input type="submit" value={this.props.formType} className="signup-submit" value="Create Account"/>
            </div>
          <div className="social-signup-box">
              <p>Want Facebook to know where you eat?</p>
              <div className="social-signups">
                  <button>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU7V53////i5vAyUZqFlL84VZwhRpVKZKTd4e5yhLVIYaIlSJbO1eUoSpcyUJo3VJzq7fRgda6rtdKQncRofLFBXKC2v9iuuNS8xNvGzeFXbqp9jruXpMiMmsLx8/h3iLcAMY0UPpKirc1l7EByAAAEEElEQVR4nO3da2+bMBiGYQNxIAEfOKVpu6Zb//+PHLSNtEkVNVD7fW0995dqU4e4BImDTZjIPmv6YRSpNA59c4eJjx9dqbSR1Dv2Y0mjVdn9I7RtnY7unqxbexdWpqDeHS8VpvoQ2oROz/+Txr4L2zSP4FzRzsJOUe+Hx1Q3CctUz9E5WWaiSfkQTgexEb2m3gmv6V4MKZ+k02k6iDFxYTofRRFCCCGEEEIIIYSQ5+Q96h358aQptKqV1sWUnlNq+vPc/Hcm7vUkOWnG9tBdmyq3t/eszfO8qprH66V76w+n9uk8/Rb1jm5L6no8XPPs2262iXE2VKu2c9B9do7tVJVK9JUzL0Khkt1tjS82oRZv63iRCaU62NXAmIRaPq73xSRUp5UvwMiEUvWbfNEI5fFhIzASoayvW4FxCKW6bAbGIazXj4JxCdXLDmAMwuJpDzAGoXa/johTqDaPE5EITbsPyF94XHUxGKFQP+8EchfKnW8z/IX7DyF3odr7KuQuNMNuIHPhnk/ckQj3A3kLi1PqQrX9ujcOoSw2TB5GJTT7LpsiEOqVV762ar7oTM1YaMXL0F6eS32sv4j1+qHzB5rqtVBFlGvcjpPc/cSj3tVNub7RtCpOn/N4f4r3e2faaaXiUlPv5/a0yzzwLeavnTldWFxYjwbfVLssiA6Gejd3VDffAzMd8UnqNI9YRfw+MwkdptmuMb8MnYRdvIOhcBP+Sl74krzwEPUDOyCEkH8QQsg/CCHkH4QQ8g9CCPkHIYT8gzAKoVzKSagXN0H+9W45lgsZl9nE89IWpojvxDA/cVfXcjntwsaP3Le23CPtwkYA4UPyQuKFjQDCV9rhJICwpR0uAgiJb9XwL7TE6/z+hRXxKrh/IfFwGEBIvc7vX0i9Cu5feCK+Zcq/8Cl14Y36EUrehdTDoX8h+f/M4V1Iftubd+Eb9S1T3oXkU3HehcTXTgGExD7/whv1G413YX5MXdiQ3wXuW0g8lRhASH+PtG/hM/Vw6F1IPhx6F9J/ydmz8Eb/1VLPQuqpRP9C6qlEMT+cJa8WckDYhX+e0w8WE/G40G+HVe7XPwsbYABcLol7MRaDEEL+QQgh/yCEkH8QQsg/CCHkH4QQ8g9CCPkHIYT8gxBC/kEIIf8ghJB/EELIPwgh5B+EEPIPQgj5ByGE/IMQQv5BCCH/IISQfxBCyD8IIeQfhBDyD0II+QchhPwLKCR6YnQooRzFkLbQDKKneYRGKKHuBdFTQEMJVSOykuQ0DSSUZSayjuQgBhKqbhJmLcWwE0ZYtNkstIbgPA0ilMa+C7PKhD+KIYSFmZ9GNQsz29ahD6N/oaxbm92FWdaVSgc9Wf0KpdGq7D62Iu6ba/oh5DPO/QrHoW/uW/kLSYBOpbGNG6MAAAAASUVORK5CYII=" alt=""/>
                    <span>Continue with Facebook</span>
                  </button>
                  <button>
                  <img src="data:image/png;base64,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" alt=""/>
                    Continue with Google
                  </button>
              </div>
          </div>
        </form>
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