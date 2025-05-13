import { Todo } from '../../../models/todo'
import './TodoItem.css'

type TodoItemProps ={
    todo: Todo
    updtFn: (i: number) => void
    i: number
}

export default ({todo, updtFn, i}: TodoItemProps) => <li className='input-group'>
    <div className='input-group-text'>
        <input className='form-control' type="number" disabled value={todo.prio}  />
    </div>
    <span className='input-group-text'>{todo.name}</span>
    <div className='input-group-text'>
        <input className='form-check-input mt-0' type='checkbox' checked={todo.done} onChange={() => {updtFn(i)}} />
    </div>
</li>
