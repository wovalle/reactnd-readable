import React, { Component } from 'react';
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";

import * as postActions from '../actions/posts.actions';
// TODO: Sorting https://codepen.io/jtrumbull/pen/yNwMQr
class PostList extends Component {
  state = {
    category: ''
  }

  componentDidMount() {
    this.props.postActions.getCategories();
    this.props.postActions.getPosts();
  }

  filterByCategory = (e) => {
    const category = e.target.value;
    this.setState({ category });
    // Optimist approach, first filter and then do a roundtrip to api
    this.props.postActions.getPosts(category);
  }

  render() {
    const all = {
      name: 'All',
      id: ''
    };

    const categories = [all, ...this.props.categories].map(c => (
      <option key={c.id} value={c.id}>{c.name}</option>
    ));

    const posts = this.state.category ?
      this.props.posts.filter(p => p.category === this.state.category) :
      this.props.posts;

    const postRows = posts.map(p => (
      <tr className="d-flex" key={p.id}>
        <td className="col-5"><Link to={`post/${p.id}`}>{p.title}</Link></td>
        <td className="col-3">{p.author}</td>
        <td className="col-2">{new Date(p.timestamp).toISOString().slice(0, 10)}</td>
        <td className="col-1">{p.commentCount}</td>
        <td className="col-1">{p.voteScore}</td>
      </tr>
    ));

    return (
      <div className="pt-3">
        <div className="row">
          <div className="col-md-9 col-xs-6">
            <label htmlFor="categories" className="pr-1">Categories:</label>
            <select className="custom-select" id="categories" onChange={this.filterByCategory}>
              {categories}
            </select>
          </div>
          <div className="col-md-3 col-xs-6">
            <Link className="btn btn-outline-primary float-right" to={'/new'}>Create New Post</Link>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <table className="my-2 table table-hover">
              <thead>
                <tr className="d-flex">
                  <th scope="col" className="col-5">Title</th>
                  <th scope="col" className="col-3">Author</th>
                  <th scope="col" className="col-2">Date</th>
                  <th scope="col" className="col-1">Comments</th>
                  <th scope="col" className="col-1">Score</th>
                </tr>
              </thead>
              <tbody>
                {postRows}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

PostList.propTypes = {
  postActions: propTypes.object.isRequired,
  categories: propTypes.array.isRequired,
  posts: propTypes.array.isRequired,
};

// TODO: [OUTOFSCOPE] memoized selectors
const mapStateToProps = (state) => ({
  categories: Object.keys(state.categories).map(k => state.categories[k]),
  posts: Object.keys(state.posts).map(k => state.posts[k]).filter(p => !p.deleted),
});

const mapDispatchToProps = (dispatch) => ({
  postActions: bindActionCreators(postActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
