// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, onDelete} = props
  const {title, id} = todoDetails

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="todo-list2">
      <p className="todo">{title}</p>
      <button className="delete-button" onClick={onClickDelete} type="button">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
