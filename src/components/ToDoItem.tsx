
import { ITodo } from "../lib/types"


interface Props {
    todo: ITodo
    removeTodo: (id: string) => void;
}

export const ToDoItem: React.FC<Props> = ({ todo,removeTodo }) => {
    return (
        <div className={`item ${todo.completed ? 'completed' : ''}`}>
            <p>{todo.text}</p>
            <div>
                <button >done</button>
                <button onClick={() => removeTodo(todo.id)}>remove</button>
            </div>
        </div>
    )
}
