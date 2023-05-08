import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "./Navibar.styled";

const Navibar = () => {
  const navibarTitle = [
    { id: 1, title: "Итоги", path: 'results', icon: "/icons/resultsIcon.svg" },
    { id: 2, title: "Заказы", path: 'orders', icon: "/icons/ordersIcon.svg" },
    { id: 3, title: "Сообщения", path: 'messages',  icon: "/icons/messagesIcon.svg" },
    { id: 4, title: "Звонки", path: 'callslist',  icon: "/icons/callsIcon.svg" },
    { id: 5, title: "Контрагенты", path: 'contragents', icon: "/icons/contragentsIcon.svg" },
    { id: 6, title: "Документы", path: 'documents', icon: "/icons/documentsIcon.svg" },
    { id: 7, title: "Исполнители", path: 'performances', icon: "/icons/perforancesIcon.svg" },
    { id: 8, title: "Отчеты", path: 'reports', icon: "/icons/reportsIcon.svg" },
    { id: 9, title: "База знаний", path: 'baze', icon: "/icons/bazeIcon.svg" },
    { id: 10, title: "Настройки", path: 'settings', icon: "/icons/settingsIcon.svg" },
  ];

  return (
    <S.NavibarContainer>
      <S.IconContainer>
        <S.CompanyIcon src="/icons/Union.svg" />
      </S.IconContainer>
      {navibarTitle.map((el) => (

        //   <S.NavibarElement key={el.id}>
        //     <S.NavibarIconContainer
        //       style={{
        //         backgroundImage: `url(${el.icon})`,
        //         color: "red",
        //       }}
        //     />
            <S.NavibarLink key={el.id} to={`/${el.path}`}>
                {el.title} 
                <img /> 
                <S.ActiveLinkDiv />
            </S.NavibarLink>
        //   </S.NavibarElement>
        
      ))}
      <S.ButtonAddOrder>
        <S.TextBtnOrder>Добавить заказ</S.TextBtnOrder>
        <S.IconBtnOrder src="/icons/iconAddOrder.svg" />
      </S.ButtonAddOrder>
      <S.ButtonPay>
        <S.TextBtnPay>Оплата</S.TextBtnPay>
        <S.IconBtnPay src="/icons/iconPay.svg" />
      </S.ButtonPay>
    </S.NavibarContainer>
  );
};

export default Navibar;
