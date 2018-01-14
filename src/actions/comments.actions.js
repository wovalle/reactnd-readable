import { normalize } from 'normalizr';
import actions from '../constants/actions';

export const getComments = (postId) => {
  return async (dispatch, _, { api, schema }) => {
    dispatch({ type: actions.comments.get });

    const comments = await api.getComments(postId);

    dispatch({
      type: actions.entities.add,
      payload: normalize(comments, schema.comments),
      comments
    });
  }
}


export const editComment = (postId, commentId, payload) => {
  return async (dispatch, _, { api, schema }) => {
    // dispatch({ type: actions.comments.get });

    // const comments = await api.getComments(postId);

    // dispatch({
    //   type: actions.entities.add,
    //   payload: normalize(comments, schema.comments),
    //   comments
    // });

    console.log('lol', postId, commentId, payload);
  }
}


