import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux'

import EditPost from '../components/EditPost/EditPost';
import { createPost, getCategories } from '../actions/posts.actions';

class NewPostContainer extends Component {

  componentDidMount() {
    this.props.getCategories();
  }

  savePost = (post) => {
    this.props.createPost(post, this.props.history.push);
  }

  render() {
    return (
      <EditPost
        post={{
          body: '',
          category: '',
          title: '',
          author: ''
        }}
        savePost={this.savePost}
        categories={this.props.categories}
        isEdit={false}
      />
    );
  }
}

NewPostContainer.propTypes = {
  getCategories: propTypes.func.isRequired,
  createPost: propTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  categories: Object.keys(state.categories).map(k => state.categories[k]),
});

export default connect(mapStateToProps, { getCategories, createPost })(NewPostContainer);
