import { ChangeEvent, useState } from 'react'
import { Todo } from '../../../models/todo'
import './TodoForm.css'

type TodoFormProps = {
    addTodo: (t: Todo) => void
}

export default ({ addTodo }: TodoFormProps) => {
    const [todo, setTodo] = useState(Todo.getDefaultTodo()), handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { 
        const { id, value } = e.target, newTodo = todo.copy()

        switch (id) {
            case 'prio':
                newTodo.prio = +value
                break
            default:
                newTodo.name = value
        }

        setTodo(newTodo)
    }

    return (
        <form id='new-todo' className='row needs-validation' noValidate onSubmit={(e) => {
            const validationClass = 'was-validated'

            e.preventDefault()
            e.currentTarget.classList.add(validationClass)

            if (todo.name !== '') {
                addTodo(todo)
                setTodo(Todo.getDefaultTodo())
                e.currentTarget.classList.remove(validationClass)
            }
        }}>
            <section>
                <label htmlFor='prio' className='form-label'>Priority:</label>
                <div className='input-group'>
                    <select id='prio' className='form-select' value={todo.prio} onChange={handleChange}>
                        {todo.getPriorityLevels().map((l, i) => <option key={i} value={l}>{l}</option>)}
                    </select>
                </div>
            </section>
            <section>
                <label htmlFor='name' className='form-label'>New To-Do:</label>
                <div className='input-group'>
                    <input id='name' className='form-control' value={todo.name} placeholder='Enter a new to-do...' onChange={handleChange} required />
                    <span className='input-group-btn'>
                        <button className='btn btn-primary'><i className='bi bi-plus'></i> Add</button>
                    </span>
                </div>
                <div className='invalid-feedback'>
                    Don't forget to set a priority for your to-do.
                </div>
            </section>
        </form>
    )
}
