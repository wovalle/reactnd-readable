import React, { Component } from 'react';
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { bindActionCreators } from 'redux';

import * as postActions from '../actions/posts.actions';
// TODO: Sorting https://codepen.io/jtrumbull/pen/yNwMQr
class PostList extends Component {
  componentDidMount() {
    this.props.postActions.getCategories();
  }

  render() {
    const all = {
      name: 'All',
      id: '*'
    };

    const categories = [all, ...this.props.categories].map(c => (
      <option key={c.id} value={c.path}>{c.name}</option>
    ));

    return (
      <div className="pt-3">
        <div className="row">
          <div className="col-md-9 col-xs-6">
            <label htmlFor="categories" className="pr-1">Categories:</label>
            <select className="custom-select" id="categories">
              {categories}
            </select>
          </div>
          <div className="col-md-3 col-xs-6">
            <button type="button" className="btn btn-outline-primary float-right">Create New Post</button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <table className="my-2 table table-hover">
              <thead>
                <tr className="d-flex">
                  <th scope="col" className="col-6">Title</th>
                  <th scope="col" className="col-3">Author</th>
                  <th scope="col" className="col-1">Date</th>
                  <th scope="col" className="col-1">Comments</th>
                  <th scope="col" className="col-1">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr className="d-flex">
                  <td className="col-6">Mark</td>
                  <td className="col-3">Mark</td>
                  <td className="col-1">25-12-17</td>
                  <td className="col-1">45</td>
                  <td className="col-1">4</td>
                </tr>
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
};

const mapStateToProps = (state) => ({
  categories: Object.keys(state.categories).map(k => state.categories[k]),
});

const mapDispatchToProps = (dispatch) => ({
  postActions: bindActionCreators(postActions, dispatch) 
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
