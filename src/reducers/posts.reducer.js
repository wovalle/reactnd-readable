import actions from '../constants/actions';

export default function postsReducer(state = {}, action) {
  switch (action.type) {
    case actions.entities.add:
      return {
        ...state,
        ...action.payload.entities.post,
      }
    default:
      return state
  }
}
