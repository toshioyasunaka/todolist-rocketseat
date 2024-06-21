import styles from './Counter.module.css'

import { TodoType } from './Todo';

interface CounterProps {
  title: string;
  color: string;
  todoList: TodoType[];
}

export function Counter({ title, color, todoList }: CounterProps) {
  const numberOfCompletedTodos = todoList.reduce((acc: number, todo: TodoType) => {
    return acc + (todo.isDone ? 1 : 0)
  }, 0)

  return (
    <div>
      <span className={styles[color]}>{title}</span>
      <span className={styles.counter}>{`${color === 'purple' ? `${numberOfCompletedTodos} de ${todoList.length}`: todoList.length}`}</span>
    </div>
  )
}