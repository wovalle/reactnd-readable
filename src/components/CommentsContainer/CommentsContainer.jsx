import React, { Component } from 'react';
import propTypes from 'prop-types';

import VoteCount from '../VoteCount/VoteCount';
class CommentsContainer extends Component {
  state = {
    body: '',
    author: '',
    id: '',
    editing: false,
  }

  editComment = (comment) => {
    this.setState({
      id: comment.id,
      body: comment.body,
      author: comment.author,
      editing: true,
    });
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.submitComment(this.state);
    this.clearCommentBox();
  }

  deleteComment = (c) => {
    return (e) => {
      e.preventDefault();

      // Don't want to use a library for this solely reason.
      if (window.confirm(`Are you sure you want to the comment "${c.body}" written by "${c.author}"?`)) {
        this.props.deleteComment(c);
      }
    }
  }

  clearCommentBox = () => {
    this.setState({
      body: '',
      author: '',
      id: '',
      editing: false
    });
  }

  render() {
    const { comments } = this.props;

    const commentElems = comments.map(c => {
      const { id, author, voteScore, body } = c;
      return (
        <div className="comment media mb-4" key={id}>
          <div className="media-body">
            <div className="header">
              <h5 className="t-0 d-inline">{author}</h5>
              <div className="vote-count d-inline pl-4">
                <VoteCount
                  count={voteScore}
                  voteAction={(up) => () => this.props.voteComment(c, up)}
                />
              </div>
              <div className="actions-buttons d-inline float-right">
                <a href="#" className="pr-1" onClick={() => this.editComment(c)}>edit</a>
                <a href="#" className="pr-1" onClick={this.deleteComment(c)}>delete</a>
              </div>
            </div>
            {body}
          </div>
        </div>
      )
    });

    return (
      <div className="col-md-8 offset-md-2">
        <div className="card my-4">
          <h5 className="card-header">Leave a Comment:</h5>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <textarea className="form-control" id="body" rows="2" value={this.state.body} onChange={this.onInputChange} required></textarea>
              </div>
              <div className="form-group input-group">
                <span className="input-group-addon">Author</span>
                <input type="text" className="form-control" id="author" placeholder="Author Name" value={this.state.author} onChange={this.onInputChange} required />
              </div>
              <button type="submit" className="btn btn-primary float-right ml-2">Submit</button>
              <button type="button" onClick={this.clearCommentBox} className="btn btn btn-outline-danger float-right">Clear</button>
            </form>
          </div>
        </div>
        {commentElems}
      </div>
    );
  }
}

CommentsContainer.propTypes = {
  comments: propTypes.array.isRequired,
  submitComment: propTypes.func.isRequired,
  deleteComment: propTypes.func.isRequired,
  voteComment: propTypes.func.isRequired,
};

export default CommentsContainer;
