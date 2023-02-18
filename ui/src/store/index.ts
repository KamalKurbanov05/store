import { configureStore, MiddlewareArray  } from '@reduxjs/toolkit';
import itemSlice  from './reducers/itemSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { itemsApi } from './services/items';




const rootReducer = combineReducers({
    itemSlice,
})

const setupStore = () => configureStore({
    reducer:{ 
        rootReducer,
        [itemsApi.reducerPath]: itemsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemsApi.middleware),
})

export type RootAppState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']



export default setupStore;