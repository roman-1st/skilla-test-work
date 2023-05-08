import styled from "styled-components";

export const CalendarModal = styled.div<{ displayModal?: boolean }>`
    position: absolute;
    left: -92px;

    top: 30px;
    background: #FFFFFF;
    box-shadow: 0px 0px 26px rgba(233, 237, 243, 0.8);
    height: 239px;
    width: 204px;
    border-radius: 4px;
    border: 1px solid #EAF0FA;
    display: flex;
    flex-direction: column;
    align-items: center;

    

    z-index: 3;
    display: ${ 
        props => props.displayModal
            ? 'block'
            : 'none' 
    };
`

export const TermTitle = styled.div<{state?: boolean}>`
    width: 202px;
    height: 40px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    
    color: #899CB1;
    margin: auto;
    cursor: pointer;

    p {
        color: ${props => props.state ? '#002CFB' : "#899CB1;"};
        margin: 0;
        height: 28px;
        display: inline-block;
    }

    p:nth-child(1) {
        margin-top: 7px;
        margin-left: 20px;
        width: 34px;
    }

    p:nth-child(2) {
        margin-top: 6px;
        margin-left: 20px;
    }

    p:nth-child(3) {
        margin-top: 6px;
        margin-left: 21px;
    }

    p:nth-child(4) {
        margin-top: 12px;
        margin-left: 21px;
    }
    &:hover {
        background-color: rgba(0, 44, 251, 0.13);
        // p {
        //     color: #122945;
        //     margin: 0;
        // }
    }

    &:nth-child(5) {
        background: #FFFFFF;
        cursor: default;

        p {
            color: #122945;
            width: 82px;
        }
        &:hover {
            background: #FFFFFF;
        }
    }
`

export const InputTerm = styled.input`
    position: absolute;
    width: 116px;
    height: 28px;
    border: none;
    background: none;
    color: #122945;
    left: 22px;
    bottom: 20px;
    padding: 0;

    &::placeholder {
        color: #ADBFDF;
    }
`

export const CalendarIcon = styled.div`
    position: absolute;
    bottom: 26.4px;
    right: 21px;
    width: 16px;
    height: 17.6px;
    background-image: url("/icons/iconCalendar.svg");
    background-repeat: no-repeat;
    background-position: center;
`