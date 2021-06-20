import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList:[]
}

const TodoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo:(state,action)=>{
            state.todoList.push(action.payload)
        },
        
        setCheck:(state,action)=>{
            state.todoList.map((ele)=>{
                if(action.payload===ele.id){
                    if(ele.done===true){
                        ele.done=false
                    }else{
                        ele.done=true
                    }
                }
                return ele;
            })
        }
    }
});

export const {
    saveTodo,
    setCheck
} = TodoSlice.actions

export const selectTodoList=state=>state.todos.todoList
export default TodoSlice.reducer