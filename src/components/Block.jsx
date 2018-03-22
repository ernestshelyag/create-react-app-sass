import React from 'react'

function Block(props) {

  const {block} = props
  return (
    <div>
      <h2 className = 'title' >{block.title}</h2>
      <p>{block.text}</p>
      <h3>Date: {new Date(block.date).toDateString()}</h3>
    </div>
  )
}

export default Block
