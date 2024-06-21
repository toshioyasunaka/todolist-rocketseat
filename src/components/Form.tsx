import { FormEvent, useState } from 'react'

import styles from './Form.module.css'
import plusIcon from '../assets/plusIcon.svg'

interface FormProps {
  onAddNewTask: (taskTitle: string) => void
}

export function Form({ onAddNewTask }: FormProps) {
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault()

    onAddNewTask(newTaskTitle)
    setNewTaskTitle('')
  }

  return (
    <form className={styles.form}>
      <input 
        type="text"
        placeholder='Adicione uma nova tarefa'
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />

      <button onClick={handleAddNewTask}>
        Criar
        <img src={plusIcon} alt="Ícone adicionar" />
      </button>
    </form>
  )
}