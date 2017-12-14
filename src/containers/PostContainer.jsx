import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux'

import Post from '../components/Post/Post';
import { getPost } from '../actions/posts.actions';
import { getComments } from '../actions/comments.actions';

class PostContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
  }

  render() {
    const elem = this.props.post ? < Post post={this.props.post} comments={this.props.comments} /> : null;
    return (
      elem
    );
  }
}

PostContainer.propTypes = {
  getPost: propTypes.func.isRequired,
};

// TODO: [OUTOFSCOPE] memoized selectors
const mapStateToProps = (state, props) => ({
  post: state.posts[props.match.params.id],
  comments: Object.keys(state.comments).map(c => state.comments[c]).filter(c => c.parentId === props.match.params.id)
});

export default connect(mapStateToProps, { getPost, getComments })(PostContainer);
