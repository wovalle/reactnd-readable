import * as actions from '../constants/actions';

export const getComments = () => {
    return {
        type: actions.GET_COMMENTS,
        comments: [
            { id: 1, text: 'first' } ,
            { id: 2, text: 'second' } ,
            { id: 3, text: 'third' }
        ]
    }
}

export const getAsyncComments = () => {
    return (dispatch, getState) => {
        console.log('mira manin, soy un estado', getState())
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