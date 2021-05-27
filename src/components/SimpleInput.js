import { useRef, useState } from 'react'

const SimpleInput = (props) => {
  const [enteredname, setEnteredName] = useState('')
  // const [enteredNameIsValid, setEmteredNameIsValid] = useState(true) // its not menaningful to set a invalid value as true
  const [enterednameTouched, setEnteredNameTouched] = useState(false)

  const enteredNameIsValid = enteredname.trim() !== ''

  const formSubmisstionhandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true)
    if (!enteredNameIsValid) {
      return
    }
    setEnteredName('')
    setEnteredNameTouched(false)
  }

  const nameInputBlur = e => {
    setEnteredNameTouched(true)
  }

  const setNameChangeHandler = e => {
    setEnteredName(e.target.value)
  }
  const nameInputIsInvalue = !enteredNameIsValid && enterednameTouched
  const nameInputClasses = nameInputIsInvalue ? 'form-control invalid' : ' form-control '
  return (
    <form onSubmit={formSubmisstionhandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredname} onBlur={nameInputBlur} onChange={setNameChangeHandler} />
        {nameInputIsInvalue && <p className="error-text">Name should not be empty</p>}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
