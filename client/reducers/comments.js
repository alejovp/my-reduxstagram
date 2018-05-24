function postComments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            // return new state with the new comment
            return [
                // the existing comments
                ...state,
                // plus the new one
                { user: action.author, text: action.comment }
            ];
        case 'REMOVE_COMMENT':
            // return new state without the deleted one
            return [
                // from the start to the one we want to delete
                ...state.slice(0, action.i),
                // after the deleted one, to the end
                ...state.slice(action.i + 1)
            ];
        default:
            return state;
    }
    return state;
}

function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
            // take the current state
            ...state,
            // overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        };
    }
    return state;
}

export default comments;
