import React from 'react'

function Todo() {
  const [task, setTask] = React.useState('')
  const [tasks, setTasks] = React.useState([])
  const [editingIndex, setEditingIndex] = React.useState(null) 

  const handleChange = (e) => setTask(e.target.value)
  const handleSubmit = () => {
    const value = task.trim()
    if (!value) return

    if (editingIndex === null) {
      setTasks(prev => [...prev, value])
    } else {
      setTasks(prev => prev.map((t, idx) => (idx === editingIndex ? value : t)))
      setEditingIndex(null)
    }
    setTask('')
  }

  const handleEdit = (index) => {
    setEditingIndex(index)
    setTask(tasks[index])
  }

  const handleCancel = () => {
    setEditingIndex(null)
    setTask('')
  }

  const handleDelete = (index) => {
    setTasks(prev => prev.filter((_, idx) => idx !== index))
    if (editingIndex !== null) {
      if (index === editingIndex) {
        setEditingIndex(null)
        setTask('')
      } else if (index < editingIndex) {
        setEditingIndex(editingIndex - 1)
      }
    }
  }

  const isEditing = editingIndex !== null

  return (
    <div className='d-flex flex-column align-items-center my-3 px-3'>
      <h3>Todo app</h3>

      <input
        type="text"
        placeholder='Enter Task'
        value={task}
        onChange={handleChange}
        onKeyDown={(e) => { if (e.key === 'Enter') handleSubmit() }}
      />

      <div className='mt-2'>
        <button className='btn btn-primary me-2' onClick={handleSubmit}>
          {isEditing ? 'Update' : 'Add'}
        </button>
        {isEditing && (
          <button className='btn btn-secondary' onClick={handleCancel}>Cancel</button>
        )}
      </div>

      <div className='mt-3 w-100'>
        {tasks.map((item, i) => (
          <div key={i} className='d-flex align-items-center justify-content-between my-1'>
            <span>{item}</span>
            <div>
              <button className='btn btn-success me-2' onClick={() => handleEdit(i)}>Edit</button>
              <button className='btn btn-danger' onClick={() => handleDelete(i)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Todo
