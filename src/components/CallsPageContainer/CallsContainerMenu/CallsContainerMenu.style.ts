import styled from "styled-components";

export const CallsContainerMenu = styled.div`
    width: 100%;
    // border: 1px solid green;
    position: relative;
    top: 84px;
    display: flex;
    align-items: centerl;
    justify-content: space-between;
`

export const SearchContainer = styled.div`

    height: 40px;
    width: 40px;
    position: relative;

    &::before {
        position: absolute;
        top: 13px;
        z-index: 21;
        position: absolute;
        content: '';
        width: 16px;
        height: 16px;
        background-image: url("/icons/searchIcon.svg");
        background-repeat: no-repeat;
        background-position: right;
    }

    &:hover::before {
        background-image: url("/icons/serchIconHover.svg");
    }

    &:focus-within::before {
        padding-left: 18px;
    }

    &::after {
        z-index: 12;
        position: absolute;
        content: '';
        width: 16px;
        height: 16px;
        background-image: url("/icons/clearSearchIcon.svg");
        background-repeat: no-repeat;
        background-position: center;
        top: 13px;
        left: 451px;
        display: none;
        cursor: pointer;
    }

    &:focus-within::after {
        display:block;
    }


    &:hover::after {
        background-image: url("/icons/clearSearchIconHover.svg");
    }
`

export const Input = styled.input`

     position: absolute;
     padding-left: 28px;
     width: 436px;
     height: 38px;
     border: none;
     outline: none;
    background: none;
    cursor: default;
    

    &:focus {
        content: '';
        width: 436px;
        height: 38px;
        background: #FFFFFF;
    
        border: 1px solid #002CFB;
        border-radius: 48px;
        outline: none;
        padding-left: 46px;
        
    }

`

export const FiltersContainer = styled.div`
    // height: 21px;
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    top: 10px;
    width: 749px;
    justify-content: space-between;
`

export const FilterTypeContainer = styled.div`
    display: flex;
    align-items: center;
    color: #5E7793;

    &:hover > button {
        background-image: url("/icons/Vector-Hover.svg");
        cursor: pointer;
    }

    &:hover {
        color: #002CFB;
        cursor: pointer;
    }
`

export const FilterText = styled.p`
    height: 21px;
    opacity: 0.87;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 148%;
    margin: 0;
`

export const ViewFilterButton = styled.button`
    margin: 0;
    margin-left: 8px; 
    height: 10px;
    border: none;
    outline: none;
    background: none;
    background-image: url("/icons/Vector-.svg");
    background-repeat: no-repeat;
    background-position: center;

`