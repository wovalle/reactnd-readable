import actions from '../constants/actions';

export default function commentsReducer(state = {}, action) {
  switch (action.type) {
    case actions.entities.add:
      return {
        ...state,
        ...action.payload.entities.comment,
      }
    default:
      return state
  }
}
