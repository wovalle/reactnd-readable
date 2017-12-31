import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux'

import EditPost from '../components/EditPost/EditPost';
import { getPost, getCategories, editPost } from '../actions/posts.actions';

class EditPostContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
  }

  savePost = (post) => {
    this.props.editPost(post);
  }

  render() {
    let elem = null;
    if (this.props.post && this.props.categories)
      elem = (
        <EditPost
          post={this.props.post}
          savePost={this.savePost}
          isEdit
        />
      );
    return (
      elem
    );
  }
}

EditPostContainer.propTypes = {
  getPost: propTypes.func.isRequired,
  getCategories: propTypes.func.isRequired,
  editPost: propTypes.func.isRequired,
};

// TODO: [OUTOFSCOPE] memoized selectors
const mapStateToProps = (state, props) => ({
  post: state.posts[props.match.params.id],
  categories: Object.keys(state.categories).map(k => state.categories[k]),
});

export default connect(mapStateToProps, { getPost, getCategories, editPost })(EditPostContainer);
