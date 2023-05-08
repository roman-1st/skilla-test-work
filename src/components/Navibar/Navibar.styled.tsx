import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavibarContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 2730px;
    left: 0px;
    top: 0px;
    background: #091336;

`

export const IconContainer = styled.div`
    width:240px;
    height: 80px;

`

export const CompanyIcon = styled.img`
    width: 108.34px;
    height: 28px;
    margin-top: 20px;
    margin-left: 12px
`

export const NavibarElement = styled.div`
    display: flex;
    align-items: center;
    width: 240px;
    height: 52px;

    &:hover {
        // width: 237px;
        // border-left: 3px solid #002CFB;
        background: rgba(216, 228, 251, 0.32);
    }
`

export const NavibarIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 52px;

    background-repeat: no-repeat;
    background-position: center;

`

export const NavibarIcon = styled.img`
    fill: rgba(255, 255, 255, 0.56);
`

export const ActiveLinkDiv = styled.div`
    position: absolute;
    top: 22px;
    right: 12px;
    width: 8px;
    height: 8px;
    background: #FFD500;
    box-shadow: 0px 3px 8px rgba(237, 218, 1, 0.5);
    border-radius: 50%;
    display: none;
`

export const NavibarLink = styled(NavLink)`
    width: 192px;
    height: 52px;
    // padding-left: 48px;

    display: flex;
    align-items: center;
    position: relative;

    cursor: default;
    // left: 48px;
    padding-left: 48px;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;

    &.active {
        background: rgba(216, 228, 251, 0.32);
        color: #FFFFFF;
        padding-left: 45px;
        border-left: 3px solid blue;

        > ${ActiveLinkDiv} {
            display: inline-block;
        }
    }


    &:hover {
        outline: none;
        transition: 0.2s;
        background: rgba(216, 228, 251, 0.32);
        color: #FFFFFF;
        padding-left: 45px;
        border-left: 3px solid blue;
    }
`

export const ButtonAddOrder = styled.button`
    width: 200px;
    height: 52px;
    background: #005FF8;
    border-radius: 4px;
    margin-top: 64px;
    margin-left: 20px;
    border: none;
    display: flex;
    align-items: center;
    padding: 0;
    underline: none;


    &:active {
        outline: none;
        transition: 0.2s;
        background: #274BC8;
    }
`

export const TextBtnOrder = styled.p`
    margin-left: 24px;
    height: 24px;
    width: 115px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 148%;
    color: #FFFFFF;
`

export const IconBtnOrder = styled.img`
    margin-left: 17px;
    width: 24px;
`

export const ButtonPay = styled.button`
    width: 200px;
    height: 52px;
    background: #005FF8;
    border-radius: 4px;
    margin-top: 32px;
    margin-left: 20px;
    border: none;
    display: flex;
    align-items: center;
    padding: 0;

    // &:hover {
    //     outline: none;
    //     transition: 0.2s;
    //     background: #0024CB;
        
    // }

    &:active {
        outline: none;
        transition: 0.2s;
        background: #274BC8;
    }
`

export const TextBtnPay = styled.p`
    margin-left: 65px;
    height: 24px;
    width: 54px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 148%;
    color: #FFFFFF;
`

export const IconBtnPay = styled.img`
    margin-left: 33.5px;
    width: 25px
`