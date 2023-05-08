import React, { useRef, useState } from "react";
import * as S from './CalendarModal.style'

interface PropsDisplayModal {
    displayModal: boolean,
    calendarTerm: any[],
    setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>,
    setColendarTerm: React.Dispatch<React.SetStateAction<any>>,
}

const CalendarModal = ({displayModal, calendarTerm, setColendarTerm, setDisplayModal } : PropsDisplayModal) => {
    const ref = useRef<HTMLDivElement>(null);
    
    // const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    //     if (ref.current && !ref.current.contains(event.target as Node) ) {


    //       setDisplayModal( (prevState) => {
    //         console.log('2');

    //         return prevState = false;
    //       })
    //     }
    // }
    // document.addEventListener('mousedown', handleClickOutside);

    const handleClick = (id: number) => {
        setColendarTerm((prevTerms: any[]) =>
          prevTerms.map((term) =>
            term.id === id ? { ...term, state: true } : { ...term, state: false }
          )
        );
    };
    
    function formatInput(event: React.ChangeEvent<HTMLInputElement>) {
        const input = event.target
        const { value } = input;
        const digitsOnly = value.replace(/\D/g, '');
        const formattedValue = digitsOnly
          .replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1.$2.$3-$4.$5.$6')
          .slice(0, 17);
      
        input.value = formattedValue;
    }
    return (
        <S.CalendarModal 
        ref={ref}
        displayModal={displayModal}>
            {calendarTerm.map ( (el) => (
                <S.TermTitle state={el.state} key={el.id} onClick={() => handleClick(el.id)}>
                    <p>{el.title}</p>
                </S.TermTitle>
            ))}
            <S.TermTitle> <p> Указать даты </p></S.TermTitle>
            <S.InputTerm 
            pattern="\d{2}\.\d{2}\.\d{2}-\d{2}\.\d{2}"
            onInput={formatInput}
            placeholder="__.__.__-__.__.__"
            />
            <S.CalendarIcon />
            
        </S.CalendarModal>
    )
}

export default CalendarModal