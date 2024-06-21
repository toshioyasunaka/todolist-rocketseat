import styles from './TodoList.module.css'
import List from '../assets/list.svg'
import { Counter } from './Counter'
import { Todo, TodoType } from './Todo'

interface TodolistProps {
  todoList: TodoType[];
  onRemoveTodo: (id: string) => void;
  onMarkTodoAsDone: (id: string) => void;
}

export function TodoList({ todoList, onRemoveTodo, onMarkTodoAsDone }: TodolistProps) {
  return (
    <div className={styles.todoContainer}>
      {todoList.length > 0 ? (
        <div>
          <div className={styles.todoCounter}>
            <Counter title='Tarefas Criadas' color='blue' todoList={todoList} />
            <Counter title='Concluídas' color='purple' todoList={todoList} />
          </div>

          <ul className={styles.todoList}>
            {todoList.map(todo => {
              return (
                <Todo 
                  key={todo.id}
                  todo={todo}
                  handleRemoveTodo={onRemoveTodo}
                  handleMarkTodoAsDone={onMarkTodoAsDone}
                />
              )
            })}
          </ul>
        </div>
      ) : (
        <div className={styles.withoutTodoList}>
          <img src={List} />
          <span style={{fontWeight: 'bold'}}>Você ainda não tem tarefas cadastradas</span>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      )}

    </div>
  )
}