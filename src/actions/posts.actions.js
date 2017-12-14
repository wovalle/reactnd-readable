import { normalize } from 'normalizr';

import actions from '../constants/actions';

export const getCategories = (dispatch, getState) => {
    return async (dispatch, _, { api, schema } ) => {
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
