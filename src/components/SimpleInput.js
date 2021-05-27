import { useRef, useState } from 'react'

const SimpleInput = (props) => {
  const [enteredname, setEnteredName] = useState('')
  const nameInputRef = useRef()
  // const [enteredNameIsValid, setEmteredNameIsValid] = useState(true) // its not menaningful to set a invalid value as true
  const [enteredNameIsValid, setEmteredNameIsValid] = useState(false)
  const [enterednameTouched, setEnteredNameTouched] = useState(false)

  const formSubmisstionhandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true)
    if (enteredname.trim() === '') {
      setEmteredNameIsValid(false)
      return
    }
    setEmteredNameIsValid(true)
    console.log(enteredname)
    const enteredNameVal = nameInputRef.current.value
    console.log(enteredNameVal)
  }

  const nameInputIsInvalue = !enteredNameIsValid && enterednameTouched
  const nameInputClasses = nameInputIsInvalue ? 'form-control invalid' : ' form-control '
  return (
    <form onSubmit={formSubmisstionhandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' value={enteredname} onChange={(e) => { setEnteredName(e.target.value) }} />
        {nameInputIsInvalue && <p className="error-text">Name should not be empty</p>}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
