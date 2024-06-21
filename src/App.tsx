import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

import styles from './App.module.css'

import { Header } from './components/Header'
import { Form } from './components/Form'
import { TodoList } from './components/TodoList'
import { TodoType } from './components/Todo'

const tasks: TodoType[] = [
  {
    id: uuidv4(),
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isDone: false,
  },
  {
    id: uuidv4(),
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isDone: true,
  },
]

function App() {
  const [todoList, setTodoList] = useState(tasks)

  function addNewTask(taskTitle: string) {
    setTodoList([...todoList, {
      id: uuidv4(),
      title: taskTitle,
      isDone: false,
    }])
  }

  function removeTodo(id: string) {
    const newTodoList = todoList.filter(todo => todo.id !== id)

    setTodoList(newTodoList)
  }

  const markTodoAsDone = (id: string) => {
    const newTodoList = todoList.map(todo => {
      if(todo.id === id) {
        return {...todo, isDone: !todo.isDone}
      }
      return todo
    })
    
    setTodoList(newTodoList)
  }

  return (
    <main className={styles.main}>
      <Header />
      <Form onAddNewTask={addNewTask} />
      <TodoList 
        todoList={todoList}
        onRemoveTodo={removeTodo}
        onMarkTodoAsDone={markTodoAsDone}
      />
    </main>
  )
}

export default App
