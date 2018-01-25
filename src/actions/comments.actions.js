import { normalize } from 'normalizr';
import actions from '../constants/actions';
import uuidv1 from 'uuid/v1';

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

export const submitComment = (comment) => {
  return async (dispatch, _, { api, schema }) => {
    dispatch({ type: actions.comments.submit });
    let submittedComment = null;

    if (comment.editing) {
      submittedComment = await api.editComment(comment);
    } else {
      const id = uuidv1();
      submittedComment = await api.saveComment({ ...comment, id, timestamp: Date.now() });
    }

    dispatch({
      type: actions.entities.add,
      payload: normalize(submittedComment, schema.comment)
    });
  }
}

export const deleteComment = (comment) => {
  return async (dispatch, _, { api, schema }) => {
    dispatch({ type: actions.comments.delete });

    const deletedComment = await api.deleteComment(comment);

    dispatch({
      type: actions.entities.add,
      payload: normalize(deletedComment, schema.comment)
    });
  }
}

export const voteComment = (comment, upVote) => {
  return async (dispatch, _, { api, schema }) => {
    dispatch({ type: actions.comments.vote });

    const editedComment = await api.voteComment(comment, upVote);

    dispatch({
      type: actions.entities.add,
      payload: normalize(editedComment, schema.comment)
    });
  }
}
