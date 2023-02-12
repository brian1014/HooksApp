import PropTypes from 'prop-types'

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo}) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      
      <span 
        className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}
        onClick={() => onToggleTodo(todo.id)}
        aria-label='span'
        >
          {todo.description}
      </span>
      
      <button 
        onClick={() => onDeleteTodo(todo.id)}
        className='btn btn-danger'
      >
        Borrar
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
}