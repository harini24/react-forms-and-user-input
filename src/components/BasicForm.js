import { useEffect } from 'react';
import useInput from '../hooks/useInputBasicForm'
import { useState } from "react"
const BasicForm = (props) => {

  const {
    value: first_name,
    inputIsValid: firstNameIsvalid,
    hasError: firstnameHasError,
    inputOnBlur: firstnameOnBlur,
    inputOnChange: firstnameOnChange,
    reset: firstnameReset
  } = useInput((val) => val.trim() !== '')

  const {
    value: last_name,
    inputIsValid: lastNameIsvalid,
    hasError: lastnameHasError,
    inputOnBlur: lastnameOnBlur,
    inputOnChange: lastnameOnChange,
    reset: lastnameReset
  } = useInput((val) => val.trim() !== '')

  const {
    value: email,
    inputIsValid: emailIsvalid,
    hasError: emailHasError,
    inputOnBlur: emailOnBlur,
    inputOnChange: emailOnChange,
    reset: emailReset
  } = useInput((val) => val.indexOf('@') !== -1)

  const [formIsValid, setFormIsValid] = useState(false)
  useEffect(() => {
    if (firstNameIsvalid && lastNameIsvalid && emailIsvalid) {
      console.log("firstNameIsvalid changes", firstNameIsvalid)
      setFormIsValid(true)
    } else {
      setFormIsValid(false)
    }
  }, [firstNameIsvalid, lastNameIsvalid, emailIsvalid])

  const FormSubmitHandler = (e) => {
    e.preventDefault()
    if (!formIsValid) {
      return
    }

    firstnameReset()
    lastnameReset()
    emailReset()
  }

  const FirstNameInputClasses = firstnameHasError ? 'form-control invalid' : ' form-control '
  const lastNameInputClasses = lastnameHasError ? 'form-control invalid' : ' form-control '
  const emailInputClasses = emailHasError ? 'form-control invalid' : ' form-control '

  return (
    <form onSubmit={FormSubmitHandler}>
      <div className='control-group'>
        <div className={FirstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' value={first_name} onBlur={firstnameOnBlur} onChange={firstnameOnChange} id='name' />
          {firstnameHasError && <p className="error-text">invalid firstname</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={last_name} onBlur={lastnameOnBlur} onChange={lastnameOnChange} />
          {lastnameHasError && <p className="error-text">invalid lastname</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={email} onBlur={emailOnBlur} onChange={emailOnChange} />
        {emailHasError && <p className="error-text">invalid lastname</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
