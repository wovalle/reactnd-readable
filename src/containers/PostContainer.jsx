import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux'

import Post from '../components/Post/Post';
import { getPost } from '../actions/posts.actions';
import { getComments, editComment } from '../actions/comments.actions';

class PostContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
  }

  render() {
    if (!this.props.post) {
      return null;
    }

    const post = (
      <Post
        post={this.props.post}
        comments={this.props.comments}
        editComment={this.props.editComment}
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
  getComments: propTypes.func.isRequired,
  editComment: propTypes.func.isRequired,
};

// TODO: [OUTOFSCOPE] memoized selectors
const mapStateToProps = (state, props) => ({
  post: state.posts[props.match.params.id],
  comments: Object.keys(state.comments).map(c => state.comments[c]).filter(c => c.parentId === props.match.params.id)
});

export default connect(mapStateToProps, { getPost, getComments, editComment })(PostContainer);
