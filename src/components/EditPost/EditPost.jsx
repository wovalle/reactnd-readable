import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Form, Text, Select } from 'react-form';

import { EditorState, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import debounce from 'lodash.debounce';

import './EditPost.css';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

/*
  Notes: I used react-draft-wysiwyg just so I get a wysiwyg with all the features
  (at least visually). I intentionally won't handle styling of the text, its out 
  of scope.
*/
class EditPost extends Component {
  state = {
    editorState: EditorState.createWithContent(ContentState.createFromText(this.props.post.body)),
    formState: {
      category: this.props.post.category,
      author: this.props.post.author,
      title: this.props.post.title,
    }
  };

  onEditorStateChange = (editorState) => {
    this.setState({ editorState });
  }

  onSubmit = (formState) => {
    this.setState({ formState });

    const post = { ...this.props.post, ...formState };
    post.body = this.state.editorState.getCurrentContent().getPlainText();

    this.props.savePost(post);
  }

  render() {

    let categoryControl = null;

    // If we're editing a post, the category shouldn't be a select
    // because the api doesn't allow to edit categories 
    if (this.props.isEdit) {
      categoryControl = (
        <span id="category" className="form-control" disabled>{this.props.post.category}</span>
      );
    }
    else {
      const categories = this.props.categories.map(c => ({
        label: c.name,
        value: c.id
      }));
      categoryControl = (
        <Select
          id="category"
          field="category"
          className="custom-select form-control"
          options={categories}
          required
        />
      );
    }

    return (
      <div className="edit-post" >
        <div className="form-row">
          <Form defaultValues={this.state.formState} onSubmit={this.onSubmit}>
            {
              formApi => (
                <form className="col-md-12" onSubmit={formApi.submitForm}>
                  <div className="form-group col-12">
                    <label htmlFor="title">Title</label>
                    <Text className="form-control" id="title" field="title" placeholder="Post title" required />
                  </div>
                  <div className="form-row col">
                    <div className="form-group col-6">
                      <label htmlFor="author">Author</label>
                      <Text className="form-control" id="author" field="author" placeholder="Author" required />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="category">Category</label>
                      {categoryControl}
                    </div>
                  </div>
                  <div className="form-group col">
                    <Editor
                      editorClassName="form-control form-editor"
                      onEditorStateChange={debounce(this.onEditorStateChange, 100)}
                      editorState={this.state.editorState}
                      required
                    />
                  </div>
                  <div className="form-group col">
                    <button className="btn btn-primary float-right">Submit</button>
                  </div>
                </form>
              )
            }
          </Form>
        </div>
      </div >
    );
  }
}

//TODO: If is not edit, make categories required

EditPost.propTypes = {
  post: propTypes.object.isRequired,
  categories: propTypes.array,
  savePost: propTypes.func.isRequired,
  isEdit: propTypes.bool.isRequired
};

export default EditPost;
