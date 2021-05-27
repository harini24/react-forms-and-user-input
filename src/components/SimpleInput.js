import { useEffect, useRef, useState } from 'react'
import useInput from '../hooks/useInput'
const SimpleInput = (props) => {

  const { value: enteredname,
    hasError: nameInputIsInvalid,
    isValid: enteredNameIsValid,
    setValueChangeHandler: setNameChangeHandler,
    InputBlur: nameInputBlur,
    reset: nameReset } = useInput(value => value.trim() !== '')


  const { value: enteredEmail,
    hasError: emailInputIsInvalid,
    isValid: enteredEmailIsValid,
    setValueChangeHandler: setEmailChangeHandler,
    InputBlur: emailInputBlur,
    reset: emailReset } = useInput(value => value.indexOf('@') !== -1)

  const [formIsValid, setFormIsvalid] = useState(false)



  useEffect(() => {
    if (enteredNameIsValid && enteredEmailIsValid) {
      setFormIsvalid(true)
    } else {
      setFormIsvalid(false)
    }
  }, [enteredNameIsValid, enteredEmailIsValid])

  const formSubmisstionhandler = (e) => {
    e.preventDefault();
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return
    }
    nameReset()
    emailReset()
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : ' form-control '
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : ' form-control '
  return (
    <form onSubmit={formSubmisstionhandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredname} onBlur={nameInputBlur} onChange={setNameChangeHandler} />
        {nameInputIsInvalid && <p className="error-text">Name should not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input type='text' id='name' value={enteredEmail} onBlur={emailInputBlur} onChange={setEmailChangeHandler} />
        {emailInputIsInvalid && <p className="error-text">Email should have @</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
