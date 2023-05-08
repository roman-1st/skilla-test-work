import styled from "styled-components";

export const ChechTypeInput = styled.input`
    position: absolute;
    left: 0px;
    opacity: 0;
    margin: 0;
`

export const CheckboxLabel = styled.label.attrs({ type: 'checkbox' })<{ checked: boolean }>`
  position: relative;
  width: 16px;
  height: 16px;
  display: block;
  margin: auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: url(${
        props => props.checked
            ? "/icons/typeInputChecked.svg"
            : "/icons/typeInputUnchecked.svg"
    });
    background-repeat: no-repeat;
    background-position: center;
  }

  &:hover::before {
    background: url(${
        props => props.checked
            ? "/icons/typeInputCheckedHover.svg"
            : "/icons/typeInputUncheckedHover.svg"
    });
}
`

export const Tbody = styled.tbody`

`

export const TR = styled.tr`            // строка
    height: 65px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 140%;
    text-aligt: left;
    border: none;

    &:hover {
        background: rgba(212, 223, 243, 0.17);
        border-radius: 0px;
        border-top: 1px solid #EAF0FA;
        border-bottom: 1px solid #EAF0FA;
    }
    &:hover td:nth-child(1) {
        opacity: 1;
        border-top: 1px solid #EAF0FA;
        border-bottom: 1px solid #EAF0FA;
    }
    &:hover td:nth-child(6) {
        color: #5E7793;
    }
    &:hover td:nth-child(8) {
        p {
            opacity: 0;
        }
        div{
            opacity: 1;
        }
    }



`

export const TD = styled.td.attrs({ type: 'checkbox' })<{ checked?: boolean }>`    
    padding: 0px;
    border-top: 1px solid #EAF0FA;

    &:nth-child(1) {
        border: none;
        border-bottom: none;
        opacity: 0;
    }
    &:nth-child(4) {
        margin: 0;
        position: relative;

        & img{
            position: absolute;
        }
        & img:nth-child(1) {
            left: 0px;
            top: calc(50% - 16px);
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }  
        & img:nth-child(2) {
            width: 16px;
            height: 16px;
            right: 6px;
            top: calc(50% - 8px);
        }    
        & img:nth-child(3) {
            width: 16.67px;
            height: 16.67px;
            right: 33.6px;
            top: calc(50% - 8px);
        }
    }
    &:nth-child(5) {
        & :first-child {
            
        }
        & :last-child {
        color: #5E7793;
        }
    }
    &:nth-child(6) {
        color: #899CB1;
        margin-top: 13px;
    }
    &:nth-child(8) {
        position: relative;
        p:nth-child(1) {

        }

        div {
            opacity: 0;
            // position: relative;
        }
    }
}
`

export const ButtonDefineCall = styled.button`
    width: 122px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #002CFB;
    border-radius: 4px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    text-align: center;
    color: #002CFB;
    outline: none;
    transition: 0.2s;

    &:hover {
        background: #0024CB;
        border: 1px solid #0024CB;
        color: #FFFFFF;
    }

    &:active {
        background: #FFFFFF;
        border: 1px solid #274BC8;
        color: #274BC8;
    }
`

export const DefineResultOne = styled.div`
    width: 56px;
    height: 26px;
    background: #FEE9EF;
    border: 1px solid #EA1A4F;
    border-radius: 4px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #EA1A4F;
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    left: 36px;

    & div {
        position: absolute;
        left: -36px;
        height: 8px;
        width: 8px;
        background: #EA1A4F;
        border-radius: 50%;
    }

    & div:nth-child(2) {
        left: -26px;
        display: none;
    }

`

export const DefineResultTwo = styled.div`
    width: 66px;
    height: 26px;
    background: #D8E4FB;
    border: 1px solid #ADBFDF;
    border-radius: 4px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #122945;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 36px;

    & div {
        position: absolute;
        left: -36px;
        height: 8px;
        width: 8px;
        background: #ADBFDF;
        border-radius: 50%;
    }

    & div:nth-child(2) {
        left: -26px;
    }

`

export const SourceContainer = styled.div`
    // height: 60px;
    // width: 197px;
    margin-top: 11px;
    margin-bottom: 13px;
    margin-right: 17px;
`

export const DefineResultThree = styled.div`
    width: 70px;
    height: 26px;
    background: #DBF8EF;
    border: 1px solid #28A879;
    border-radius: 4px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #00A775;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 36px;

    & div {
        position: absolute;
        left: -36px;
        height: 8px;
        width: 8px;
        background: #28A879;
        border-radius: 50%;
    }

    & div:nth-child(2) {
        left: -26px;
    }

    & div:nth-child(3) {
        left: -16px;
    }
`

export const CallsAudioContainer = styled.div`
    height: 48px;
    width: 352px;
    border-radius: 48px;
    background: #EAF0FA;
    margin-left: 2px;
    display: flex;
`

export const TimeValueDiv = styled.p`
    position: absolute;
    right: 40px;
    // top: calc(50% - 9px);
`

export const CallTimeValue = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 145%;
    color: #122945;
    width: 37px;
    height: 22px;
    margin-left: 19px;
    margin-top: 14px;
`

export const AudioStartButton = styled.button`
  width: 24px;
  height: 24px;
  margin-left: 12px;
  margin-top: 12px;
  border: none;
  outline: none;
  border-radius: 24px;
  background-color: #FFFFFF;
  background-image: url("/icons/startAudioButton.svg");
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`

export const AudioProgressbar = styled.div`
    margin-left: 8px;
    margin-top: 23px;
    width: 164px;
    height: 4px;
    background: #ADBFDF;
    border-radius: 50px;
  cursor: pointer;
  position: relative;
`

export const ProgressbarCompleted = styled.div`
    height: 4px;
    background: #ADBFDF;
    border-radius: 50px;
    background: #002CFB;
    position: relative;
`

export const ListetingTime = styled.div`
    position: absolute;
    top: -20px;
    left: calc(35%);
`

export const DownloadButton = styled.button`
    width: 13px;
    height: 16px;
    margin-left: 18px;
    padding: 0;
    margin-top: 16px;
    border: none;
    outline: none;
    background: none;
    background-image: url("/icons/downloadButton.svg");
    background-repeat: no-repeat;
    cursor: pointer;

    &:hover {
        background-image: url("/icons/downloadButtonHover.svg");
    }
`

export const StopDownloadButton = styled.button`
    width: 14px;
    height: 14px;
    margin-left: 22px;
    padding: 0;
    margin-top: 17px;
    border: none;
    outline: none;
    background: none;
    background-image: url("/icons/stopDownloadButton.svg");
    background-repeat: no-repeat;
    cursor: pointer;
    z-index: 2;

    &:hover{
        background-image: url("/icons/stopDownloadButtonHover.svg");
    }
`