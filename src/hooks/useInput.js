import { useState } from "react"

const useInput = (validateValue) => {

    const [enteredValue, setenteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validateValue(enteredValue)
    const hasError = !valueIsValid && isTouched

    const InputBlur = e => {
        setIsTouched(true)
    }

    const setValueChangeHandler = e => {
        setenteredValue(e.target.value)
    }

    const reset = () => {
        setenteredValue('')
        setIsTouched(false)
    }

    return {
        value: enteredValue,
        hasError,
        isValid: valueIsValid,
        InputBlur,
        setValueChangeHandler,
        reset
    }
}

export default useInput