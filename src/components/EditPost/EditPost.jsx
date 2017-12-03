import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';

import './EditPost.css';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class EditPost extends Component {
  render() {
    return (
      <div className="edit-post">
        <div className="form-row">
          <form className="col-md-12">
            <div className="form-group col-12">
              <label htmlFor="title">Title</label>
              <input className="form-control" id="title" placeholder="Post title" />
            </div>
            <div className="form-row col">
              <div className="form-group col-6">
                <label htmlFor="author">Author</label>
                <input className="form-control" id="author" placeholder="Author" />
              </div>
              <div className="form-group col-6">
                <label htmlFor="category">Category</label>
                <select className="custom-select form-control" id="category">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className="form-group col">
              <Editor editorClassName="form-control form-editor" />
            </div>
            <div className="form-group col">
              <button className="btn btn-primary float-right">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditPost;
