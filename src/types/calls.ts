import React from "react"

export interface CallsState {
    dataCalls: Call[],
    isLoadingCalls: boolean,
    audioCall: any,
}

export interface CallListening {
    audio: any;
}

export interface Call {
    date: string,
    date_notime: string,
    from_number: string,
    id: number;
    in_out: number;
    record: string,
    source: string,
    person_id: number,
    person_avatar: string,
    status: string,
    time: number,
    partner_data: {
        id: string,
        name: string,
        phone: string,
    }
    partnership_id: string,
}

export interface ResponePostState {
    date_start: string,
    date_end: string,
    in_out: number,
}

export enum CallsActionTypes {
    GET_CALLS_STATE = 'GET_CALLS_STATE',
    ADD_CALLS_TO_STATE = "ADD_CALLS_TO_STATE",
    IS_LOADING_CALLS = "IS_LOADING_CALLS",
    GET_AUDIO_CALL = 'GET_AUDIO_CALL',
    ADD_AUDIO_CALL = "ADD_AUDIO_CALL",
    
}

interface getCallsStateAction {
    type: CallsActionTypes.GET_CALLS_STATE
    payload: Call[],
}

interface addCallsToStateAction {
    type: CallsActionTypes.ADD_CALLS_TO_STATE,
    payload: Call[],
}

interface isLoadingCallsAction {
    type: CallsActionTypes.IS_LOADING_CALLS,
}

interface getAudioCallAction {
    type: CallsActionTypes.GET_AUDIO_CALL
}

interface addAudioCallAction {
    type: CallsActionTypes.ADD_AUDIO_CALL,
    payload: any,
}


export type CallsActions = 
    getCallsStateAction |
    addCallsToStateAction |
    isLoadingCallsAction |
    getAudioCallAction |
    addAudioCallAction 