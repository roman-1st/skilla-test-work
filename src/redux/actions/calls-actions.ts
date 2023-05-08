import { Call, CallsActionTypes, CallListening } from './../../types/calls';

export const getCallsAction = (payload: Call[]) => {
    return {type: CallsActionTypes.ADD_CALLS_TO_STATE, payload}
}

export const loadingCallsAction = () => {
    return {type: CallsActionTypes.IS_LOADING_CALLS}
}

export const addAudioCallAction = (payload: any) => {
    return { type: CallsActionTypes.ADD_AUDIO_CALL, payload}
}