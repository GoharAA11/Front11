import { useContext } from "react"
import { ToDoContext } from "../lib/context"
import { ToDoItem } from "./ToDoItem"
import { ActionTypes } from "../lib/types"
import { remove } from "../lib/api"

export const List:React.FC = () => {
    const context=useContext(ToDoContext)
    if(!context){
        throw new Error("undefined")
    }
    
    const {state,dispatch}=context
    const removeTodo = async (id: string) => {
        await remove(id);
        dispatch({ type: ActionTypes.removeTodo, payload: id });
    };
    return <div className="list">
        <h3>List</h3>
        {state.todos.map(elm=><ToDoItem key={elm.id} todo={elm} removeTodo={removeTodo} />)
        }
    </div>
}