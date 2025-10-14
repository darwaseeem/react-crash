'use client'
import React, { useState } from 'react'

function Todo() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const handleClick = () => {
    const t = task.trim()
    if (!t) return
    setTasks(prev => [...prev, t])
    setTask('')
  }

  const handleDelete = (idx) => {
    setTasks(prev => prev.filter((_, i) => i !== idx))
  }

  return (
    <div className='d-flex flex-column align-items-center my-3'>
      <div className='d-flex'>
        <input
          type="text"
          className='form-control w-25'
          placeholder='Enter Task'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className='btn btn-primary mx-2' type="button" onClick={handleClick}>
          Add
        </button>
      </div>

      <ul className='mt-3 list-unstyled w-25'>
        {tasks.map((item, index) => (
          <li
            key={index}
            className='d-flex justify-content-between align-items-center mb-2'
          >
            <span>{item}</span>
            <button
              className='btn btn-danger btn-sm'
              type="button"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
