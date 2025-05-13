import { useEffect, useState } from 'react'
import { Todo } from '../../../models/todo'
import { todoStorage } from '../../../helpers/todoStorage'
import TodosList, { ListObject } from '../TodoList/TodoList'
import TodoForm from '../TodoForm/TodoForm'
import './Todos.css'

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(() => todoStorage.get() ?? [
    new Todo('Buy groceries', 2),
    new Todo('Complete homework assignment', 1),
    new Todo('Schedule dentist appointment', 3),
    new Todo('Clean the house', 2),
    new Todo('Prepare presentation for meeting', 1),
  ]);

  const [sortOrder, setSortOrder] = useState<keyof Todo>('name');

  const { completed, uncompleted } = (() => {
    const result = {
      completed: [] as ListObject[],
      uncompleted: [] as ListObject[]
    };

    todos.forEach((todo, index) => {
      todo.done ? result.completed.push({ i: index, t: todo }) : result.uncompleted.push({ i: index, t: todo });
    });

    return result;
  })();

  const addTodo = (todo: Todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    todoStorage.save(newTodos);
  };

  const sortTodos = () => {
    const newTodos = [...todos];
    newTodos.sort((a, b) => `${a[sortOrder]}`.localeCompare(`${b[sortOrder]}`));
    setTodos(newTodos);
    todoStorage.save(newTodos);
  };

  const updateDone = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
    todoStorage.save(newTodos);
  };

  useEffect(() => {
    sortTodos();
  }, [sortOrder]);

  return (
    <section id="page-todos">
      <TodoForm addTodo={addTodo} />
      <div id="todo-lists">
        <section id="sorting-container">
          <label htmlFor="sort">Sort on:</label>
          <select
            id="sort"
            className="form-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as keyof Todo)}
          >
            <option value="name">To-Do</option>
            <option value="prio">Priority</option>
          </select>
        </section>
        <section className="d-inline-block col-md-6">
          <h1>To-Do:</h1>
          <TodosList todos={uncompleted} updtFn={updateDone} />
        </section>
        <section className="d-inline-block col-md-6">
          <h2>Completed:</h2>
          <TodosList todos={completed} updtFn={updateDone} />
        </section>
      </div>
    </section>
  );
};

export default Todos;


