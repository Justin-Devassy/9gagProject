// import {createLogger} from 'redux-logger';
// import {persistReducer, persistStore} from 'redux-persist';
// import {createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import rootReducer from '../rootReducer/rootReducer';
// console.log('root', rootReducer);

// const enhancer = compose(
//   applyMiddleware(
//     thunk,
//     createLogger({
//       predicate: () => __DEV__,
//     }),
//   ),
// );

// const persistConfig = {
//   key: 'root',
//   timeout: 0,
//   storage: AsyncStorage,
//   whitelist: ['userReducer'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const store = createStore(persistedReducer, {}, enhancer);
// const persiststor = persistStore(store);

// export {persiststor};
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import {createStore, applyMiddleware, compose} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

//custom imports
import rootReducer from '../rootReducer/rootReducer';

const enhancer = compose(
  applyMiddleware(
    thunk,
    createLogger({
      predicate: () => __DEV__,
    }),
  ),
);

const persistConfig = {
  key: 'root',
  timeout: 0,
  storage: AsyncStorage,
  whitelist: ['userReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, {}, enhancer);
export const persistor = persistStore(store);
