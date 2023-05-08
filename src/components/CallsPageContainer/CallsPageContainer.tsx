import React from "react";
import CallsContainerHeader from "./CallsContainerHeader/CallsContainerHeader";
import CallsContainerMenu from "./CallsContainerMenu/CallsContainerMenu";
import CallsTableContainer from "./CallsTableContainer/CallsTableContainer";
import * as S from './CallsPageContainer.style'

const CallsPageContainer = () => {
    
    return (
        <S.CallsPageContainer>
            <S.CallsContainer>
               <CallsContainerHeader />
                <CallsContainerMenu />
            </S.CallsContainer>
            <CallsTableContainer />
        </S.CallsPageContainer>
    )
}

export default CallsPageContainer