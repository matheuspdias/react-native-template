import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Reducers from './reducers/index';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [  ]
};

const pReducer = persistReducer( persistConfig, Reducers );

const store = createStore(pReducer);
const persistor = persistStore( store );

export { store, persistor };