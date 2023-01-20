// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    secondName: '',
    firstNameErr: false,
    secondNameErr: false,
    isSubmited: false,
  }

  onUserSecondName = event => {
    this.setState({secondName: event.target.value})
  }

  onUserFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, secondName} = this.state

    this.onfirstNameErrorMsg()
    this.onSecondNameErrorMsg()
    if (firstName !== '' && secondName !== '') {
      this.setState({isSubmited: true})
    }
  }

  onfirstNameErrorMsg = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameErr: true})
    } else {
      this.setState({firstNameErr: false})
    }
  }

  onSecondNameErrorMsg = () => {
    const {secondName} = this.state
    if (secondName === '') {
      this.setState({secondNameErr: true})
    } else {
      this.setState({secondNameErr: false})
    }
  }

  inputFieldsform = () => {
    const {firstName, secondName, firstNameErr, secondNameErr} = this.state
    const firstInputClass = firstNameErr ? 'err-input' : 'user-input'
    const secondInputClass = secondNameErr ? 'err-input' : 'user-input'
    return (
      <>
        <div className="first-name-container">
          <lable htmlFor="Firstname" className="lable-input">
            FIRST NAME
          </lable>
          <input
            type="text"
            id="Firstname"
            value={firstName}
            onChange={this.onUserFirstName}
            onBlur={this.onfirstNameErrorMsg}
            className={firstInputClass}
            placeholder="First name"
          />
          {firstNameErr && <p className="error-msg">Required</p>}
        </div>
        <div className="first-name-container">
          <lable htmlFor="Secondname" className="lable-input">
            LAST NAME
          </lable>
          <input
            type="text"
            id="Secondname"
            value={secondName}
            className={secondInputClass}
            onChange={this.onUserSecondName}
            onBlur={this.onSecondNameErrorMsg}
            placeholder="Second name"
          />
          {secondNameErr && <p className="error-msg">Required</p>}
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </>
    )
  }

  goFormpage = () => {
    this.setState({isSubmited: false, firstName: '', secondName: ''})
  }

  submitedMsg = () => (
    <div className="submitedMsg-container">
      <img
        alt="success"
        className="sucess-img"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <p className="sucess-msg">Submitted Successfully</p>
      <button className="button" type="button" onClick={this.goFormpage}>
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmited} = this.state
    return (
      <div className="bg-container">
        <h1 className="page-heading">Registration</h1>
        <div className="card-container">
          {isSubmited ? (
            this.submitedMsg()
          ) : (
            <form className="form-container" onSubmit={this.onSubmitForm}>
              {this.inputFieldsform()}
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
