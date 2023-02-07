import { configureStore, MiddlewareArray  } from '@reduxjs/toolkit';
import itemSlice  from './reducers/itemSlice';
import { combineReducers } from '@reduxjs/toolkit';


const rootReducer = combineReducers({
    itemSlice,
})

const setupStore = () => configureStore({
    reducer: rootReducer,
})

export type RootAppState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']



export default setupStore;