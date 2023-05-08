import React from "react";
import * as S from './IsLoading.style'

const IsLoading = () => {

    return (
        <S.IsLoadingContainer>
            <S.LoaderImg src="icons/Loader.svg" />
            <S.LoaderText> Загружаем </S.LoaderText>
        </S.IsLoadingContainer>
    )
}

export default IsLoading