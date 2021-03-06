import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducer";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
