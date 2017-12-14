import React from 'react';
import propTypes from 'prop-types';

const CommentsContainer  = ({ comments }) => {
  const commentElems = comments.map(c => (
    <div className="comment media mb-4" key={c.id}>
      <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
      <div className="media-body">
        <div className="header">
          <h5 className="t-0 d-inline">{c.author}</h5>
          <div className="vote-count d-inline pl-4">
            <i className="fa fa-chevron-up" aria-hidden="true"></i>
            <span className="px-1">{c.voteScore}</span>
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
          <div className="actions-buttons d-inline float-right">
            <a href="" className="pr-1">edit</a>
            <a href="" className="pr-1" >delete</a>
          </div>
        </div>
        { c.body }
      </div>
    </div>
  ));
  return (
    <div className="col-md-8 offset-md-2">
          <div className="card my-4">
            <h5 className="card-header">Leave a Comment:</h5>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <textarea className="form-control" rows="2"></textarea>
                </div>
                <div className="form-group input-group">
                  <span className="input-group-addon">Author:</span>
                  <input type="text" className="form-control" id="comment-author" placeholder="Example input" />
                </div>
                <button type="submit" className="btn btn-primary float-right">Submit</button>
              </form>
            </div>
          </div>

          { commentElems }
        </div>
  );
}

CommentsContainer.propTypes = {
  comments: propTypes.array.isRequired,
};

export default CommentsContainer;
