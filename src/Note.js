import React, { useContext } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { TodosContext } from './Context/store';

export default ({ note }) => {
  const { removeTodos, completed } = useContext(TodosContext);

  const remove = () => {
    removeTodos(note.id);
  };

  const done = () => {
    completed(note.id);
  };
  return (
    <ListGroup className="d-flex justify-content-between align-content-center flex-row">
      <ListGroup.Item
        variant={note.done ? 'success' : ''}
        className="d-flex p-2 flex-grow-1 align-items-center justify-content-center "
        as="li"
      >
        {note.text}
      </ListGroup.Item>
      <ListGroup className="d-flex p-2">
        <Button className="mb-2" variant="danger" onClick={remove}>
          Remove
        </Button>

        <Button className="mb-2" variant="primary" onClick={done}>
          Done
        </Button>
      </ListGroup>
    </ListGroup>
  );
};
