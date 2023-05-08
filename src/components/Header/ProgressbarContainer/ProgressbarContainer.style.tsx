import styled from 'styled-components'

export const ProgressbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 594px;
    height: 34px;
    margin-left: 86px;
    letter-spacing: -0.5px;
    line-height: 148%;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #122945;
`

export const ProgressbarElem = styled.div`
    width: 162px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    display: inline-block;
    width: auto;
`

export const ProgressBarTextContainer = styled.div`
    display: flex;
`

export const ProgressbarP = styled.p`
    font-size: 14px;
    margin: 0;
`

export const TextP = styled.p`
   letter-spacing: -0.5px;
   line-height: 148%;
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   display: inline-block;
   margin 0;
`

export const Line = styled.div`
    margin-top: 7px;
    width: 156px;
    height: 6px;
    background: #DEE6F5;
    border-radius: 12px
`

export const LineComplete = styled.div`
    height: 6px;  
    border-radius: 12px;
`