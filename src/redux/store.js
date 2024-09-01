import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

const Store = configureStore({
    reducer : rootReducer
})

export default Store


//For persist : 

// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
// import rootReducer from './reducers/rootReducer';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
// });

// const persistor = persistStore(store);

// export { store, persistor };