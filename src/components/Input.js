import React,{useState} from 'react'
import {saveTodo} from '../features/TodoSlice'
import { useDispatch } from 'react-redux'
import '../css/Input.css'

const Input=()=>{
    const [todo, setTodo] = useState('')
    const dispatch=useDispatch()

    const handleChange=(e)=>{
        setTodo(e.target.value)
    }
    const handleClick=()=>{
        dispatch(saveTodo({
            item:todo,
            done:false,
            id:Date.now()
        }))
        setTodo('')
    }

    return(
        <div className="input__container">
            <input type="text" value={todo} onChange={e=>handleChange(e)} />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default Input