import React, { Component } from 'react';

import './PostList.css';

class PostList extends Component {
  render() {
    return (
      <div className="post-list">
        <div className="row">
          <div className="col-md-9">
            <label htmlFor="categories">Categories:</label>
            <select className="custom-select" id="categories">
              <option value="*">All</option>
              <option value="1">Cat 1</option>
              <option value="2">Cat 2</option>
              <option value="3">Cat 3 really long</option>
            </select>
          </div>
          <div className="col-md-3">
            <button type="button" className="btn btn-outline-primary float-right">Create New Post</button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <table className="table table-hover">
              <thead>
                <tr className="d-flex">
                  <th scope="col" className="col-7">Title</th>
                  <th scope="col" className="col-3">Author</th>
                  <th scope="col" className="col-1">Date</th>
                  <th scope="col" className="col-1">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr className="d-flex">
                  <td className="col-7">Mark</td>
                  <td className="col-3">Mark</td>
                  <td className="col-1">25-12-17</td>
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

export default PostList;
