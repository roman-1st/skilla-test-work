import React from "react";
import * as S from "./CallsContainerMenu.style";

const CallsContainerMenu = () => {
  const callFilters = [
    { id: 1, title: "Все типы" },
    { id: 2, title: "Все сотрудники" },
    { id: 3, title: "Все звонки" },
    { id: 4, title: "Все источники" },
    { id: 5, title: "Все оценки" },
    { id: 6, title: "Все ошибки" },
  ];

  return (
    <S.CallsContainerMenu>
      <S.SearchContainer>
        <S.Input placeholder="Поиск по звонкам" />
      </S.SearchContainer>
      <S.FiltersContainer>
          {callFilters.map((el) => (
            <S.FilterTypeContainer key={el.id}>
              <S.FilterText> {el.title} </S.FilterText>
              <S.ViewFilterButton style={{color: 'blue'}} onClick={()=> console.log(el.id)} />
            </S.FilterTypeContainer>
          ))}
        </S.FiltersContainer>
    </S.CallsContainerMenu>
  );
};

export default CallsContainerMenu;
