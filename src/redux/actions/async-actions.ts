import { CallsActions, CallsActionTypes, CallListening } from './../../types/calls';
import axios from "axios"
import { Dispatch } from 'react';

export const getCallsState = () => {
    console.log('fetch');
    
    return async (dispatch: Dispatch<CallsActions>) => {
        dispatch( { type: CallsActionTypes.IS_LOADING_CALLS })
        try {
            const data = {
                date_start: '2023-05-05',
                date_end: '2023-05-06',
                limit: 100,
              };
            const config = {
            headers: {
                'Authorization': `Bearer ${'testtoken'}`
            }
            };
            const response = await axios.post('https://api.skilla.ru/mango/getList', data, config)
            setTimeout( () => {
                dispatch({ type: CallsActionTypes.ADD_CALLS_TO_STATE, payload: response.data.results })                
            }, 2000)
        } catch (e: any) {
            console.log(e.message);
        }
    }
}

export const getAudioCall = (record: string, partnership_id: string) => {
    return async (dispatch: Dispatch<any>) => {
        try {
            const data = {
                record: record,
                partnership_id: partnership_id,
              };
            const response = await axios.post('https://api.skilla.ru/mango/getRecord', data, {
                responseType: 'arraybuffer'
            });
            dispatch({ type: CallsActionTypes.ADD_AUDIO_CALL, payload: response.data.results })                
        } catch (e: any) {
            console.log(e.message);
        }
    }
}
