import React from 'react'

const Book = (props) => {
  const {img, title, author} = props
  return (<div>
    <article className="book">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <h4>{author}</h4>
    </article>
  </div>)
}

export default Book
