import React from 'react'

export default function TodoListItem({ todo , inprogress, id }) {
    return (
        <div>
            <p>{todo}</p>
        </div>
    )
}
