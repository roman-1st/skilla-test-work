import React from "react";
import * as S from './Header.styled'
import ProgressbarContainer from "./ProgressbarContainer/ProgressbarContainer";


const Header = () => {
    return (
        <S.Header>
            <S.DateContainer>Среда, 13 окт</S.DateContainer>
            <ProgressbarContainer />
            <S.SearchIcon src="/icons/search.svg"/>
            <S.UsernameText>ИП Сидорова Александра Михайловна</S.UsernameText>
            <S.ViewUserInfo src="/icons/Vector.svg"/>
            <S.UserIcon src="/icons/userIcon.svg" />
            <S.ViewUserInfo src="/icons/Vector.svg"/>
        </S.Header>
    )
}

export default Header