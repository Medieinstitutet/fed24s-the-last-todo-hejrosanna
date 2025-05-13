import { v4 as UUID, validate } from 'uuid'

interface ITodo {
  name: string
  prio: number
  done: boolean
}

export type TodoType = ITodo & { id: string }

export class Todo implements ITodo {
  private id: string = UUID()

  static readonly PRIORITY_LEVELS: Record<string, number> = {
    LOW: 1,
    MEDIUM: 2,
    HIGH: 3,
  }

  constructor(
    public name: string,
    public prio: number = Todo.PRIORITY_LEVELS.LOW,
    public done: boolean = false
  ) {}

  setID(s: string): this {
    if (validate(s)) {
      this.id = s
    } else if ([undefined, null, ''].includes(this.id)) {
      this.id = UUID()
    }
    return this
  }

  static createFromType(t: TodoType | Todo): Todo {
    return new Todo(t.name, t.prio, t.done).setID(t instanceof Todo ? t.getID() : t.id)
  }

  static getDefaultTodo(): Todo {
    return new Todo('')
  }

  getPriorityLevels(): number[] {
    return Object.values(Todo.PRIORITY_LEVELS)
  }

  getID(): string {
    return this.id
  }

  copy(): Todo {
    return Todo.createFromType(this)
  }
}

