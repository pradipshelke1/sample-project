import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/es/storage";
import { Login } from "./reducers/login";
import logger from "redux-logger";
const config = {
  key: "cgpi-project",
  storage,
  debug: true,
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const configureStore = () => {
  const store = createStore(
    persistCombineReducers(config, {
      login: Login,
    }),
    composeEnhancer(applyMiddleware(thunk, logger))
  );
  const persistor = persistStore(store);
  return { persistor, store };
};
