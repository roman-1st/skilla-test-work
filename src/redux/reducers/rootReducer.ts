import { callsReducer } from './callsReducer';

import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    callsReducer: callsReducer,
})

export type RootState = ReturnType<typeof rootReducer>