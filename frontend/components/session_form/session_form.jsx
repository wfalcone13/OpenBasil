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
      <div>
        
      </div>
    )
  }

}