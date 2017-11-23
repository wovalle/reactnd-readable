import * as actions from '../constants/actions';

export default function commentsReducer(state = [], action) {
  switch (action.type) {
    case actions.GET_COMMENTS:
      return [
        ...state,
        ...action.comments,
      ]
    default:
      return state
  }
}
