import { Trash, Check } from '@phosphor-icons/react'

import styles from './Todo.module.css'

export interface TodoType {
  id: string;
  title: string;
  isDone: boolean;
}

interface TodoProps {
  todo: TodoType;
  handleRemoveTodo: (id: string) => void;
  handleMarkTodoAsDone: (id: string) => void;
}

export function Todo({ todo, handleRemoveTodo, handleMarkTodoAsDone }: TodoProps) {
  const isDone = todo.isDone

  const checkboxCheckedClassname = isDone
  ? styles['checkbox-checked']
  : styles['checkbox-unchecked']

  const paragraphCheckedClassname = isDone
  ? styles['paragraph-checked']
  : ''

  return (
    <li className={`${styles.todo}`}>
      <label className={styles.customCheckbox} >
        <input readOnly type="checkbox" checked={isDone} onClick={() => handleMarkTodoAsDone(todo.id)} />
        <span className={`${styles.checkmark} ${checkboxCheckedClassname}`}>
          {isDone && <Check size={12} />}
        </span>

        <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>{todo.title}</p>
      </label>
      
      <button onClick={() => handleRemoveTodo(todo.id)}>
        <Trash size={16} color='#808080' />
      </button>
    </li>
  )
}