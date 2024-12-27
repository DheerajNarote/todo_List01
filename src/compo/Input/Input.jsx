import React, { useState } from 'react'
import "./Input.css"

const Input = ({onSubmit}) => {
    const [input, setInput] = useState("")

const handleSubmit = () => {
    if (!input) return
    onSubmit(input)
    setInput("")
}    

    return (
    <div className='container'>
        <input type="text" className='input' placeholder='Enter your Task' value={input} onChange={e => setInput(e.target.value)}/>
        <button className='btn' onClick={handleSubmit}>Add</button>
        
    </div>
  )
}

export default Input