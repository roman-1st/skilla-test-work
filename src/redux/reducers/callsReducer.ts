import { CallsState, CallsActions, CallsActionTypes } from './../../types/calls';

const initialState: CallsState = {
    dataCalls: [],
    isLoadingCalls: false,
    audioCall: '',
}

export const callsReducer = ( state = initialState, action: CallsActions) : CallsState => {
    switch(action.type) {
        case CallsActionTypes.ADD_CALLS_TO_STATE: {
            return {
                ...state,
                dataCalls: [...action.payload],
                isLoadingCalls: false,
            }
        }
        case CallsActionTypes.IS_LOADING_CALLS:
            return {
                ...state,
                isLoadingCalls: true,
            }
        case CallsActionTypes.ADD_AUDIO_CALL: 
            return {
                ...state,

            }
        default: 
            return {
                ...state,
            }
    }
}