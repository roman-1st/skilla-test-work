import React, { useState } from "react";
import CalendarModal from "./CalendarModal/CalendarModal";
import * as S from "./CallsContainerHeader.style";

const CallsContainerHeader = () => {
  const balanceValue = 272;
  const [displayModal, setDisplayModal] = useState(false)
    console.log('1');
    
  const [ calendarTerm, setColendarTerm] = useState([
    {id: 1, state: true, title: '3 дня',},
    {id: 2, state: false, title: 'Неделя',},
    {id: 3, state: false, title: 'Месяц',},
    {id: 4, state: false, title: 'Год',},
])
  function changeDisplayState () {
    displayModal === true
        ? setDisplayModal(false)
        : setDisplayModal(true)
  }


  return (
    <S.CallsContainerHeader>
      <S.BalanceContainer>
        <S.BalanceText>Баланс:&nbsp;</S.BalanceText>
        <S.BalanceValue>{balanceValue}&nbsp;₽</S.BalanceValue>
        <S.BalanceButton />
      </S.BalanceContainer>
      <S.TermContainer>
        <S.ArrowLeftIcon />
        <S.CalendarTerm onClick={ () => changeDisplayState()}>
          <S.CalendarIcon />
          {calendarTerm.map ( el => (
            el.state === true 
                ? <S.CalendarValue key={el.id}>{el.title}</S.CalendarValue>
                : ''
          ))}
        </S.CalendarTerm>
        <S.ArrowRightIcon />
        <CalendarModal 
        calendarTerm={calendarTerm} 
        setColendarTerm={setColendarTerm} 
        displayModal={displayModal} 
        setDisplayModal={setDisplayModal} />
      </S.TermContainer>
    </S.CallsContainerHeader>
  );
};

export default CallsContainerHeader;
