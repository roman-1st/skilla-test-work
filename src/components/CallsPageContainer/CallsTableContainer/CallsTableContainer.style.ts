import styled from "styled-components";

export const CallsTableContainer = styled.div`
    position: absolute;
    width: 1440px;
    height: 1985px;
    left: 120px;
    top: 135px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px #E9EDF3;
    border-radius: 8px;
`

export const CallsTable = styled.table`
    display: table;
    border-collapse: collapse;
    margin-top: 24px;
`

export const THead = styled.thead`

`;

export const TrHead = styled.tr`
`

export const TH = styled.th`
  color: #899CB1;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;

  text-align: left;
  height: 16px;
    margin: 0;
    padding: 0;
    box-sitibg: border-box;
    height: 16px !important;
    padding-bottom: 20px;


  &:nth-child(1) {
    width: 40px;
    font-size: 14px;
    text-align: center;

  }
  
  &:nth-child(2) {
    width: 53px;

  }
  
  &:nth-child(3) {
    width: 99px;
  }
  
  &:nth-child(4) {
    width: 128px;
  }
  
  &:nth-child(5) {
    width: 325px;

  }
  
  &:nth-child(6) {
    width: 214px;
  }
  
  &:nth-child(7) {
    width: 198px;
  }
  
  &:nth-child(8) {
    padding-right: 40px;
    width: 352px;
    text-align: right;
  }
`;

export const ChechTypeInput = styled.input`
position: absolute;
left: 0px;
opacity: 0;
`

export const CheckboxLabel = styled.label.attrs({ type: 'checkbox' }) <{ checked: boolean }>`
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

    background: url(${props => props.checked
        ? "/icons/typeInputChecked.svg"
        : "/icons/typeInputUnchecked.svg"
    });
    background-repeat: no-repeat;
    background-position: center;
  }

  &:hover::before {
    background: url(${props => props.checked
        ? "/icons/typeInputCheckedHover.svg"
        : "/icons/typeInputUncheckedHover.svg"
    });
}
`

export const TR = styled.tr`            // строка
    height: 65px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 140%;
    text-aligt: left;

    &:hover {
        background: rgba(212, 223, 243, 0.17);
        border-radius: 0px;
    }
    &:hover td:nth-child(1) {
        border-bottom: 1px solid #ddd;
        border-top: 1px solid #ddd;
        opacity: 1;
    }
    &:hover td:nth-child(6) {
        color: #5E7793;
    }
    &:hover td:nth-child(8) {
        opacity: 1;
    }

`

export const Tbody = styled.tbody`
    // & tr {
    //     border-top: 1px solid #EAF0FA;
    //     // border-bottom: 1px solid #EAF0FA;

    //     td:nth-child(1) {
    //         border: none;
    //         border-bottom: none;
    //         opacity: 0;
    //     }
    // }

    // & tr:last-child {
    //     border-bottom: none;

    //     td:nth-child(1) {
    //         // border-bottom: none;
    //         // opacity: 0;
    //         // background: red;
    //     }

    //     &:hover {
    //         border-top: 1px solid #EAF0FA;
    //         border-bottom: 1px solid #EAF0FA;
    //     }
    // }
    
`

export const YesterdayValue = styled.tr`
    width: 58px;
    height: 22px;
    position: absolute;
    left: 40px;
    margin-top: 45px;


    p:nth-child(1) {
        width: 40px;
        height: 22px;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 145%;
        letter-spacing: 0.01em;
        color: #122945;
        margin: 0;
    }

    p:nth-child(2) {
        width: 14px;
        height: 12px;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 100%;
        color: #899CB1;
        position: absolute;
        left: 44px;
        top: 0px;
        margin: 0;
    }
`

export const TbodyYesterday = styled.tbody`
    position: relative;
    top: 75px;
`