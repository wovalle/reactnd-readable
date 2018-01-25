import React, { Component } from 'react';
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import sortBy from 'sort-by';

import VoteCount from '../components/VoteCount/VoteCount';

import * as postActions from '../actions/posts.actions';
import '../styles/global.css';

class PostList extends Component {
  state = {
    category: '',
    direction: 'asc',
    sortBy: 'timestamp'
  }

  componentDidMount() {
    const { category } = this.props.match.params;
    this.props.postActions.getCategories();
    this.props.postActions.getPosts(category);
    this.setState({ category });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.category !== nextProps.match.params.category) {
      this.setState({ category: nextProps.match.params.category });
    }
  }

  filterByCategory = (e) => {
    const category = e.target.value;

    if (!category) {
      this.props.history.push(`/`)
    } else {
      this.props.history.push(`/${category}`);
    }

    this.setState({ category });
    // Optimist approach, first filter and then do a roundtrip to api
    this.props.postActions.getPosts(category);
  }

  sortColumn = (e) => {
    const field = e.target.id;
    this.setState(state => ({
      direction: field === this.state.sortBy && state.direction === 'asc' ? 'desc' : 'asc',
      sortBy: field,
    }));
  };

  onDelete = (post) => {
    return (e) => {
      e.preventDefault();
      if (window.confirm('Do you really want to delete this post?')) {
        this.props.postActions.deletePost(post, this.props.history.push);
      }
    };
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

    const postRows = posts
      .sort(sortBy(`${this.state.direction === 'desc' ? '-' : ''}${this.state.sortBy}`))
      .map(p => (
        <tr className="d-flex" key={p.id}>
          <td className="col-4"><Link to={`${p.category}/${p.id}`}>{p.title}</Link></td>
          <td className="col-3">{p.author}</td>
          <td className="col-2">{new Date(p.timestamp).toISOString().slice(0, 10)}</td>
          <td className="col-2">{p.commentCount}</td>
          <td className="col-1">
            <VoteCount
              count={p.voteScore}
              votePost={(up) => () => this.props.postActions.votePost(p, up)}
            />
          </td>
          <td className="col-1 d-flex">
            <Link to={`/edit/${p.id}`}><i class="fa fa-pencil fa-lg primary mx-1" aria-hidden="true"></i></Link>
            <a href="#" onClick={this.onDelete(p)}><i class="fa fa-trash-o fa-lg danger mx-1" aria-hidden="true"></i></a>
          </td>
        </tr >
      ));

    const tableHeaders = [
      {
        id: 'title',
        colSize: 4,
        sortable: true,
        label: 'Title'
      },
      {
        id: 'author',
        colSize: 3,
        sortable: true,
        label: 'Author'
      },
      {
        id: 'timestamp',
        colSize: 2,
        sortable: true,
        label: 'Date'
      },
      {
        id: 'commentCount',
        colSize: 2,
        sortable: true,
        label: 'Comments'
      },
      {
        id: 'voteScore',
        colSize: 1,
        sortable: true,
        label: 'Score'
      },
    ].map(h => (
      <th
        key={h.id}
        id={h.id}
        scope="col"
        className={`col-${h.colSize} ${h.sortable && 'sortable'} ${h.sortable && this.state.sortBy === h.id && this.state.direction}`}
        onClick={this.sortColumn}>{h.label}</th>
    ))

    return (
      <div className="pt-3">
        <div className="row">
          <div className="col-md-9 col-xs-6">
            <label htmlFor="categories" className="pr-1">Categories:</label>
            <select className="custom-select" id="categories" onChange={this.filterByCategory} value={this.state.category}>
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
                  {tableHeaders}
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

const mapStateToProps = (state) => {
  return {
    categories: Object.keys(state.categories).map(k => state.categories[k]),
    posts: Object.keys(state.posts).map(k => state.posts[k]).filter(p => !p.deleted),
  }
};

const mapDispatchToProps = (dispatch) => ({
  postActions: bindActionCreators(postActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
