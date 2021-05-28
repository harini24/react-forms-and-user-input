import { useState } from "react"

const useInput = (validator) => {
    const [value, setValue] = useState('')
    const [isTouched, setISToutched] = useState(false)

    const inputIsValid = validator(value)
    const hasError = !inputIsValid && isTouched
    console.log(value, inputIsValid, hasError)
    const inputOnBlur = (e) => {
        console.log("blur")
        setISToutched(true)
    }

    const inputOnChange = (e) => {
        setValue(e.target.value)
    }

    const reset = () => {
        setValue('')
        setISToutched(false)
    }
    return {
        value,
        inputIsValid,
        hasError,
        inputOnBlur,
        inputOnChange,
        reset
    }
}

export default useInput