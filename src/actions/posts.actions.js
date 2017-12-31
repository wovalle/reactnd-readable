import { normalize } from 'normalizr';
import { getComments } from './comments.actions';
import actions from '../constants/actions';
import uuidv1 from 'uuid/v1';

export const getCategories = () => {
  return async (dispatch, _, { api, schema }) => {
    dispatch({ type: actions.categories.get });

    const { categories } = await api.getCategories();

    // HACK: Normalizr wont work well if id is not present
    categories.forEach(c => c.id = c.name);

    dispatch({
      type: actions.entities.add,
      payload: normalize(categories, schema.categories),
      categories
    });
  }
}

export const getPosts = (category = '') => {
  return async (dispatch, _, { api, schema }) => {
    dispatch({ type: actions.posts.get });

    const posts = await api.getPosts(category);

    dispatch({
      type: actions.entities.add,
      payload: normalize(posts, schema.posts),
      posts
    });
  }
}

export const getPost = (id) => {
  return async (dispatch, _, { api, schema }) => {
    dispatch({ type: actions.posts.get });

    const post = await api.getPost(id);

    dispatch({
      type: actions.entities.add,
      payload: normalize(post, schema.post),
      post
    });

    dispatch(getComments(id));
  }
}

export const editPost = (post) => {
  return async (dispatch, _, { api }) => {
    dispatch({ type: actions.posts.edit });

    const editedPost = await api.editPost(post);

    dispatch({
      type: actions.posts.editSuccess,
      post: editedPost
    });
  }
}

export const createPost = (post) => {
  return async (dispatch, _, { api }) => {
    dispatch({ type: actions.posts.create });

    const createdPost = await api.createPost({
      id: uuidv1(),
      timestamp: Date.now().valueOf(),
      ...post
    });

    dispatch({
      type: actions.posts.createSuccess,
      post: createdPost
    });
  }
}
