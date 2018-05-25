import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
// const defaultState = {
//     posts: posts,
//     comments: comments
// };
const defaultState = { posts, comments };

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

// activating hot reloading also for the reducers
if (module.hot) {
    module.hot.accept('./reducers/', () => {
        // here we need to use commonJS "require" instead of ES6 "import" because
        // we cannot use it inside a function 
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;