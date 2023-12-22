import React from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import AddComment from './AddComment';
import CommentList from './CommentList';

class CommentModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { show, movie, onClose } = this.props;
    return (
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{movie.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={movie.Poster} alt={movie.Title} className='img-fluid' />
          <h1 className='text-center mt-2'>Reviews</h1>
          <CommentList movieId={movie.imdbID} />
          <AddComment movieId={movie.imdbID} />
        </Modal.Body>
      </Modal>
    );
  }
}

export default CommentModal;
