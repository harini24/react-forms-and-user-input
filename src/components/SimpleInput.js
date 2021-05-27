import { useRef, useState } from 'react'

const SimpleInput = (props) => {
  const [enteredname, setEnteredName] = useState('')
  const nameInputRef = useRef()
  const [enteredNameIsValid, setEmteredNameIsValid] = useState(true)
  const formSubmisstionhandler = (e) => {
    e.preventDefault();

    if (enteredname.trim() === '') {
      setEmteredNameIsValid(false)
      return
    }
    setEmteredNameIsValid(false)
    console.log(enteredname)
    const enteredNameVal = nameInputRef.current.value
    console.log(enteredNameVal)
  }

  const nameInputClasses = enteredNameIsValid ? 'form-control' : ' form-control invalid'
  return (
    <form onSubmit={formSubmisstionhandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' value={enteredname} onChange={(e) => setEnteredName(e.target.value)} />
        {!enteredNameIsValid && <p className="error-text">Name should not be empty</p>}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
