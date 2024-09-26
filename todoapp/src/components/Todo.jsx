import { useState } from "react"

const Todo = () => {
    const [todos, setTodos]= useState([])
    const [task, setTask]= useState({})
    const [taskName, setTaskName]= useState({name: "",id: ""})
    const [editFlag, setEditFlag]=useState(false)

    const addTask=()=>{
        setTodos(oldTodos=> {
            return [...oldTodos,{
                id: crypto.randomUUID(),
                name: taskName.name
            }]
        })
        setTaskName({
            name:"",
            id: ""
        })
    }

    const taskUpdate=()=>{
        debugger
        let taskItemIndex = todos.findIndex(e=> e.id === taskName.id )
        console.log(taskItemIndex)

        if (taskItemIndex===0) {
            setTodos(oldTodos=> {
                return [{id: taskName.id,name: taskName.name}, ...oldTodos.slice(taskItemIndex+1)]
            })
        }
        else{
            setTodos(oldTodos=> {
                console.log(oldTodos.slice(0, taskItemIndex))
                console.log(taskName)
                console.log(oldTodos.slice(taskItemIndex+1))
                return [...oldTodos.slice(0, taskItemIndex) ,{id: taskName.id,name: taskName.name}, ...oldTodos.slice(taskItemIndex+1)]
            })
        }
        setEditFlag(false)
        setTaskName({
            name: "",
            id: ""
        })
    }

    const addLetterInIndex = (letter, index) => {
        setArray(oldArray=>{
            return [oldArray.slice(0, index), letter, oldArray.slice(index)]
        })
    }
     
    const getTaskById=(taskId)=>{
        let taskItem = todos.find(e=> e.id === taskId)

        if (taskItem) {
            setTaskName({
                name: taskItem.name,
                id: taskId
            })
            setEditFlag(true)
        }
    }

    const taskDelete=(taskId)=>{
        setTodos(oldTodos=> {
            return (oldTodos.filter(e=> e.id !== taskId))
        })
    }

    return (
        <>
            <div id="taskForm">
            {
                    
                    (editFlag ? (
                        <p id="divEdit">
                            <label>Update Task:</label>
                            <input type="text" value={taskName.name} onChange={(e)=>{
                                setTaskName({name:e.target.value, id: taskName.id})
                            }}/>
                            <button onClick={taskUpdate}>Update</button> 
                            <button>Cancel</button>
                        </p>
                        )
                        :
                        <p id="divAdd">
                            <label>Enter Task:</label>
                            <input type="text" value={taskName.name} onChange={(e)=>{
                                setTaskName({name:e.target.value, id: taskName.id})
                            }}/>
                            <button onClick={addTask}>Add Task</button>
                        </p>
                    )
                    
                }
            </div>
            <hr/>
            <ul>
            {
                todos.map((todo)=>{
                    return (
                        <li  style={{"border":"1px solid blue","width":"550px"}} key={todo.id}>
                            <span style={{"marginRight":"50px", "width":"200px"}}>{todo.name}</span>
                            <button style={{"marginRight":"10px"}} onClick={()=> getTaskById(todo.id)}>Edit</button>
                            <button onClick={()=> taskDelete(todo.id)}>Delete</button>
                        </li>
                    )
                })
            }
            </ul>
        </>
    )
}
export default Todo