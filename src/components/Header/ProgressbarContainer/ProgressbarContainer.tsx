import React from "react";
import * as S from "./ProgressbarContainer.style";

const ProgressbarContainer = () => {
  const newCallsText = "Новые звонки";
  const newCallsValue = "20 из 30 шт";
  const newCallsValueColor = "#00A775";
  const newCallsLineColor = "#28A879";
  const newCallsLineWidth = 50;

  const qualityCallsText = "Качество звонков";
  const qualityCallsValue = "40%";
  const qualityCallsValueColor = "#FFB800";
  const qualityCallsLineColor = "#FFD500";
  const qualityCallsLineWidth = 40;

  const conversionCallsText = "Конверсия в заказ";
  const conversionCallsValue = "67%";
  const conversionCallsValueColor = "#EA1A4F";
  const conversionCallsLineColor = "#EA1A4F";
  const conversionCallsLineWidth = 67;

  function progressbarCalls(
    text: string,
    callsValue: any,
    callsValueColor: string,
    bgColor: string,
    lineWidth: number
  ) {
    return (
      <>
        <S.ProgressbarElem>
          <S.ProgressBarTextContainer>
            <S.ProgressbarP>{text}&nbsp;</S.ProgressbarP>
            <S.TextP style={{ color: callsValueColor }}>{callsValue}</S.TextP>
          </S.ProgressBarTextContainer>
          <S.Line>
            <S.LineComplete
              style={{ width: lineWidth + "%", background: bgColor }}
            />
          </S.Line>
        </S.ProgressbarElem>
      </>
    );
  }

  return (
    <S.ProgressbarContainer>
      {progressbarCalls(
        newCallsText,
        newCallsValue,
        newCallsValueColor,
        newCallsLineColor,
        newCallsLineWidth
      )}
      {progressbarCalls(
        qualityCallsText,
        qualityCallsValue,
        qualityCallsValueColor,
        qualityCallsLineColor,
        qualityCallsLineWidth
      )}
      {progressbarCalls(
        conversionCallsText,
        conversionCallsValue,
        conversionCallsValueColor,
        conversionCallsLineColor,
        conversionCallsLineWidth
      )}
    </S.ProgressbarContainer>
  );
};

export default ProgressbarContainer;
