import { useTodos } from '../hooks'
import { TodoList, TodoAdd } from './'

export const TodoApp = () => {

  const { todos, todosCount, pendingTodosCount, onNewTodo, onDeleteTodo, onToggleTodo } = useTodos()

  return (
    <>
      <h1>TodoApp: {todosCount}, <small>Pendientes: {pendingTodosCount}</small></h1>
      <hr />
      
      <div className='row'>
        <div className='col-7'>
          <TodoList 
            todos={todos} 
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>
        
        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={onNewTodo} />
        </div>
      </div>
    </>
  )
}
