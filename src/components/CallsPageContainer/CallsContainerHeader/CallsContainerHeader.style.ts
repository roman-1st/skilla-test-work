import styled from "styled-components";

export const CallsContainerHeader = styled.div`
    position: absolute;
    width: 1440px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
`

export const BalanceContainer = styled.div`
    width: 121px;
    height: 40px;
    background: #FFFFFF;
    border-radius: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
`

export const BalanceText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 148%;
    color: #899CB1;
    white-space: nowrap;
    width: 45px;
    display: inline-block;
    margin: 0;

`
export const BalanceValue = styled.p`
    color: #122945;
    display: inline-block;
    margin: 0;
`

export const BalanceButton = styled.button`
    width: 24px;
    height: 24px;
    background-image: url("/icons/balanceIcon.svg");
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    outline: none;
    border-radius: 50%;
    cursor: pointer;

    &:hover{
        background-image: url("/icons/balanceHover.svg");
        outline: none;
        transition: 0.2s;
        ~ ${BalanceValue}:hover {
            color: blue;
          }
    }

    &:active{
        background-image: url("/icons/balanceActive.svg");
        outline: none;
        transition: 0.2s;
    }
`

export const TermContainer = styled.div`
    margin-left: 48px;
    width: 113px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    // cursor: pointer;
`

export const ArrowLeftIcon = styled.div`
    width: 6px;
    height: 10px;
    background-image: url("/icons/arrowLeft.svg");
    background-repeat: no-repeat;
    background-position: center;

    &:hover {
        background-image: url("/icons/arrowLeftHover.svg");
    }
`

export const ArrowRightIcon = styled.div`
    width: 6px;
    height: 10px;
    background-image: url("/icons/arrowRight.svg");
    background-repeat: no-repeat;
    background-position: center;

    &:hover {
        background-image: url("/icons/arrowRightHover.svg");
    }
`

export const CalendarTerm = styled.div`
    width: auto;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    cursor: pointer;

    :hover {
        & div:nth-child(1){
            background-image: url("/icons/iconCalendarHover.svg");
        }
    }
`

export const CalendarIcon = styled.div`
    width: 16px;
    height: 18px;
    background-image: url("/icons/iconCalendar.svg");
    background-repeat: no-repeat;
    background-position: center;
`

export const CalendarValue = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #002CFB;
    margin-left: 8px;
`