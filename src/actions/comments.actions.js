import * as actions from '../constants/actions';

export const getAsyncComments = (dispatch, getState) => {
    return () => {
        dispatch({
            type: actions.GET_COMMENTS,
            comments: [
                { id: 1, text: 'first' } ,
                { id: 2, text: 'second' } ,
                { id: 3, text: 'third' }
            ]
        })
    }
}
