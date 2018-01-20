import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CommentsContainer from '../CommentsContainer/CommentsContainer';

const Post = ({ post, comments, submitComment, deleteComment }) => {
  const timestamp = new Date(post.timestamp);
  const time = timestamp.toLocaleTimeString();
  const date = timestamp.toLocaleDateString();

  const onSubmitComment = (payload) => {
    submitComment({ ...payload, parentId: post.id });
  }

  return (
    <div className="post">
      <div className="col-md-10 offset-md-1">
        <div className="row">
          <div className="col-md-8">
            <h2>{post.title}</h2>
            <h6>Category: {post.category} | Posted by {post.author} on {date} at {time}</h6>
          </div>
          <div className="col-md-2 offset-md-2">
            <div className="vote-count float-right">
              <i className="fa fa-chevron-up" aria-hidden="true"></i>
              <span className="px-1">{post.commentCount}</span>
              <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="actions-buttons float-right">
              <Link to={`/edit/${post.id}`} className="pr-1">edit</Link>
              <a href="" className="pr-1">delete</a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 post-body">
            <p className="text-justify"> {post.body} </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="comments">
        <CommentsContainer
          comments={comments}
          submitComment={onSubmitComment}
          deleteComment={deleteComment}
        />
      </div>
    </div>
  );
}

Post.propTypes = {
  post: propTypes.object.isRequired,
  submitComment: propTypes.func.isRequired,
  deleteComment: propTypes.func.isRequired,
};

export default Post;
