import actions from '../constants/actions';

export default function categoriesReducer(state = {}, action) {
  switch (action.type) {
    case actions.entities.add:
      return {
        ...state,
        ...action.payload.entities.category,
      }
    default:
      return state
  }
}
