import React from "react";
import Card from "react-bootstrap/Card";

const TaskCard = ({ task }) => {
  return (
    <div className="">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{task.taskName}</Card.Title>
          <Card.Text>
            {task.taskDescription}
          </Card.Text>
          <button variant="primary">Select</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TaskCard;

// {this.props.book.name} <br />

// <a className="book-title-text" href="/bookPage">
// <h5>
//   {this.props.arr.name} <br />
// </h5>
// </a>

// {this.state.allBooks.map((key) => (
//   <div key={key.isbn}>
// <h5>
//   Book name: {key.name} <br />
//   Book author: {key.author} <br />
//   Book category: {key.category} <br />
//   Book ISBN: {key.isbn} <br />
// </h5>
//   </div>
// ))}
