import { Todo } from "../../../models/todo";
import TodoItem from './TodoItem'

export type ListObject = {
    i: number
    t: Todo
}

type ListProps = {
    todos: ListObject[]
    updtFn: (i: number) => void
}

export default ({todos, updtFn}: ListProps) => <ul className='row justify-content-center'>
        { todos.map(lo => <TodoItem key={lo.t.getID()} todo={lo.t} updtFn={updtFn} i={lo.i} />) }
    </ul>
