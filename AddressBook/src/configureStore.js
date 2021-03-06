import { createStore } from "redux";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
 };

 const persistReducers = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  let store = createStore(persistReducers);
  let persistor = persistStore(store);
  return { persistor, store };
}
