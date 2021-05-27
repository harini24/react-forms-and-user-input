import { useRef, useState } from 'react'

const SimpleInput = (props) => {
  const [enteredname, setEnteredName] = useState('dsf')
  const nameInputRef = useRef()
  const formSubmisstionhandler = (e) => {
    e.preventDefault();
    console.log(enteredname)
    const enteredNameVal = nameInputRef.current.value
    console.log(enteredNameVal)
  }
  return (
    <form onSubmit={formSubmisstionhandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' value={enteredname} onChange={(e) => setEnteredName(e.target.value)} />
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
