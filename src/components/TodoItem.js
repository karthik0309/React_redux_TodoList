import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import {setCheck} from '../features/TodoSlice'
import { useDispatch } from 'react-redux';
import '../css/TodoItem.css'

const TodoItem = ({name,done,id}) => {

    const dispatch=useDispatch()
    
    const handleChange=()=>{
        dispatch(setCheck(id))
    }
    return (
        <div className="todoItem">
            <Checkbox
                checked={done}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'Primary checkbox' }}
            />
            <p className={done && "todoItem--done"}>{name}</p>
        </div>
    )
}

export default TodoItem
