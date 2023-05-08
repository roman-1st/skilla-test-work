import React, { useEffect, useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import * as S from "./CallsTableContainer.style";
import CallString from "./CallString/CallString";
import IsLoading from "./IsLoading/IsLoading";
import { state } from "./testState";

function CallsTableContainer() {
  const { getCallsState } = useActions();
  const { dataCalls, isLoadingCalls } = useTypedSelector(
    (state) => state.callsReducer
  );

  console.log(dataCalls);
  

  useEffect(() => {
    getCallsState();
  }, []);

  const [checked, setChecked] = useState(false);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked);
  }

  if(isLoadingCalls) return <IsLoading />

  return (
    <S.CallsTableContainer>
      <S.CallsTable>
        <S.THead>
          <S.TrHead>
            <S.TH>
              <S.CheckboxLabel
                // props={checked}
                checked={checked}
                onClick={(e: any) => handleInputChange(e)}
                htmlFor="checkType"
              >
                <S.ChechTypeInput type="checkbox" id="checkType" />
              </S.CheckboxLabel>
            </S.TH>
            <S.TH>Тип</S.TH>
            <S.TH>Время</S.TH>
            <S.TH>Сотрудник</S.TH>
            <S.TH>Звонок</S.TH>
            <S.TH>Источник</S.TH>
            <S.TH>Оценка</S.TH>
            <S.TH>Длительность</S.TH>
          </S.TrHead>
        </S.THead>
        <S.Tbody>
        {state.map((el) => (
          <CallString
          key={el.id}
          type={el.type}
          dateNoTime={el.dateNoTime}
          date={el.date}
          avatar={el.avatar}
          partnerData={el.partnerData}
          fromName={el.fromName}
          record={el.record}
          time={el.time}
          partnershipId={el.partnerId}
          status={el.type}
          source={el.source}
          picBrowser={el.picBrowser}
          picPhone={el.picPhone}
        />
        ))}
        {dataCalls.slice(0,11).map((el) => (
          <CallString
            key={el.id}
            type={el.status}
            dateNoTime={el.date_notime}
            date={el.date}
            avatar={el.person_avatar}
            partnerData={el.partner_data}
            fromName={el.partner_data.name}
            record={el.record}
            time={el.time}
            partnershipId={el.partnership_id}
            status={el.status}
            source={el.source}
          />
        ))}
        </S.Tbody>
        <thead>
        <S.YesterdayValue>
          <td>
            <p> вчера </p>
            <p> 67</p>
          </td>
        </S.YesterdayValue>
        </thead>
        <S.TbodyYesterday>
        {dataCalls.slice(12, 23).map((el) => (
          <CallString
            key={el.id}
            type={el.status}
            dateNoTime={el.date_notime}
            date={el.date}
            avatar={el.person_avatar}
            partnerData={el.partner_data}
            fromName={el.partner_data.name}
            record={el.record}
            time={el.time}
            partnershipId={el.partnership_id}
            status={el.status}
            source={el.source}
          />
        ))}
        </S.TbodyYesterday>
      </S.CallsTable>
    </S.CallsTableContainer>
  );
}

export default CallsTableContainer;
