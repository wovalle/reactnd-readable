import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux'

import EditPost from '../components/EditPost/EditPost';
import { getPost, editPost } from '../actions/posts.actions';

class EditPostContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
  }

  savePost = (post) => {
    this.props.editPost(post, this.props.history.push);
  }

  render() {
    let elem = this.props.post ? (
      <EditPost
        post={this.props.post}
        savePost={this.savePost}
        isEdit
      />
    ) : null;

    return (
      elem
    );
  }
}

EditPostContainer.propTypes = {
  getPost: propTypes.func.isRequired,
  editPost: propTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  post: state.posts[props.match.params.id]
});

export default connect(mapStateToProps, { getPost, editPost })(EditPostContainer);
