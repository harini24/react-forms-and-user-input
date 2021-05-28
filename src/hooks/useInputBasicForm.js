import { useReducer, useState } from "react"

const inputStateReducer = (state, action) => {
    if (action.type == 'INPUT') {
        return {
            value: action.value,
            isTouched: state.isTouched
        }
    }
    if (action.type == 'BLUR') {
        return {
            value: state.value,
            isTouched: true
        }
    }
    if (action.type == 'RESET') {
        return {
            value: '',
            isTouched: false
        }
    }
    return {
        value: '',
        isTouched: false
    }
}

const useInput = (validator) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, { value: '', isTouched: false })
    // const [value, setValue] = useState('')
    // const [isTouched, setISToutched] = useState(false)

    const inputIsValid = validator(inputState.value)
    const hasError = !inputIsValid && inputState.isTouched
    console.log(inputState.value, inputIsValid, hasError)

    const inputOnBlur = (e) => {
        console.log("BLUR")
        dispatch({ type: "BLUR" })
        // setISToutched(true)
    }

    const inputOnChange = (e) => {
        dispatch({ type: "INPUT", value: e.target.value })
        // setValue(e.target.value)
    }

    const reset = () => {
        dispatch({ type: "RESET" })
        // setValue('')
        // setISToutched(false)
    }
    return {
        value: inputState.value,
        inputIsValid,
        hasError,
        inputOnBlur,
        inputOnChange,
        reset
    }
}

export default useInput