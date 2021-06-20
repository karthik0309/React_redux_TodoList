import React from 'react'
import Input from './components/Input'
import TodoItem from './components/TodoItem'
import { selectTodoList } from './features/TodoSlice'
import { useSelector } from 'react-redux'
import './App.css'

const App = () => {

  const todoItem=useSelector(selectTodoList)
  return (
    <div className="app">
      <div className="app__container">
        <div className="todoList__container">
          {todoItem.map((ele)=>(
            <TodoItem name={ele.item} done={ele.done} id={ele.id}/>
          ))}
        </div>
      <Input/>
      </div>
    </div>
  )
}

export default App
