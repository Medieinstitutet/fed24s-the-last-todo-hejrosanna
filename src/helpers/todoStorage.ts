import { Todo, TodoType } from "../models/todo";

const TODO_STORAGE_KEY = 'todos';

export const todoStorage = {
    save: (todos: Todo[]) => { localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos)) },
    get: () => {
        const lsStr = localStorage.getItem(TODO_STORAGE_KEY)

        return !lsStr ? undefined : (JSON.parse(lsStr) as TodoType[]).map(t => Todo.createFromType(t))
    } 
}
