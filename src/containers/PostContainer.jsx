import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux'

import Post from '../components/Post/Post';
import NotFound from '../components/shared/NotFound';

import { getPost, deletePost, votePost } from '../actions/posts.actions';
import { getComments, submitComment, deleteComment, voteComment } from '../actions/comments.actions';

class PostContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
  }

  render() {
    if (!this.props.post) {
      return null;
    }

    if (this.props.post.deleted) {
      return <NotFound />;
    }

    const post = (
      <Post
        post={this.props.post}
        comments={this.props.comments}
        deletePost={(post) => this.props.deletePost(post, this.props.history.push)}
        submitComment={this.props.submitComment}
        deleteComment={this.props.deleteComment}
        votePost={this.props.votePost}
        voteComment={this.props.voteComment}
      />
    );
    const elem = this.props.post ? post : null;
    return (
      elem
    );
  }
}

PostContainer.propTypes = {
  getPost: propTypes.func.isRequired,
  deletePost: propTypes.func.isRequired,
  getComments: propTypes.func.isRequired,
  submitComment: propTypes.func.isRequired,
  deleteComment: propTypes.func.isRequired,
  votePost: propTypes.func.isRequired,
  voteComment: propTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  post: state.posts[props.match.params.id],
  comments: Object.keys(state.comments)
    .map(c => state.comments[c])
    .filter(c => c.parentId === props.match.params.id)
    .filter(c => !c.deleted)
});

const mapDispatchToProps = {
  getPost,
  deletePost,
  getComments,
  submitComment,
  deleteComment,
  votePost,
  voteComment,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
