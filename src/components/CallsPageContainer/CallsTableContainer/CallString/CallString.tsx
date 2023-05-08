import { formatIncompletePhoneNumber } from "libphonenumber-js";
import React, { useState } from "react";
import * as S from "./Callstring.style";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useActions } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

interface PropsCallString {
  type: string;
  dateNoTime: string;
  date: string;
  avatar: string;
  partnerData: any;
  fromName: string;
  record: string;
  time: number;
  partnershipId: string;
  status: string;
  source: string;
  picBrowser?: number | undefined;
  picPhone?: number | undefined;
}

const CallString = ({
  type,
  dateNoTime,
  date,
  avatar,
  partnerData,
  fromName,
  record,
  time,
  partnershipId,
  status,
  source,
  picBrowser,
  picPhone,
}: PropsCallString) => {
  const { getAudioCall } = useActions();
  const { audioCall } = useTypedSelector((state) => state.callsReducer);
  const [checked, setChecked] = useState(false);

  const formattedNumber = formatIncompletePhoneNumber(partnerData.phone, "RU");

  const callTimeLength = () => {
    if (time === 0) return ''
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;
    // if (`${minutesString}:${secondsString}` === '00:00') return ''
    return `${minutesString}:${secondsString}`;
  };

  const callTimeListening = () => {
    
    const listeningTime = time * 0.2;
    const minutes = Math.floor(listeningTime / 60);
    const seconds = listeningTime % 60;
    const minutesString = minutes < 10 ? `${minutes}` : `${minutes}`;
    
    
    const secondsString =
      seconds < 10 ? `0${seconds.toFixed(0)}` : `${seconds.toFixed(0)}`;
    return `${minutesString}:${secondsString}`;
  };

  const callTimeValue = () => {
    return date.split(" ")[1].substring(0, 5);
  };

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked);
  }

  function goingCallDisplay() {
    switch (status) {
      case "Дозвонился":
        return "/icons/positiveOutgoingCall.svg";
      case "Не дозвонился":
        return "/icons/negativeOutgoingCall.svg";
      case "Входящий":
        return "/icons/goingCall.svg";
    }
  }
  const callRecognized = Math.floor(Math.random() * 6) + 1;

  function DisplayCallRecognized() {
    switch (callRecognized) {
      case 1:
        return (
          <S.DefineResultOne>
            <div />
            Плохо
          </S.DefineResultOne>
        );
      case 2:
        return (
          <S.DefineResultTwo>
            <div />
            <div />
            Хорошо
          </S.DefineResultTwo>
        );
      case 3:
        return (
          <S.DefineResultThree>
            <div />
            <div />
            <div />
            Отлично
          </S.DefineResultThree>
        );
      case 4:
        return <S.ButtonDefineCall>Распознать</S.ButtonDefineCall>;
      case 5:
        return <p style={{ color: "#EA1A4F" }}>Скрипт не распознан</p>;
      case 6:
        return <></>;
    }
  }

  return (
    <S.TR>
      <S.TD>
        <S.CheckboxLabel
          checked={checked}
          // style={{opacity: checked ? '1' : '0'}}
          onClick={(e: any) => handleInputChange(e)}
          htmlFor="checkType"
        >
          <S.ChechTypeInput type="checkbox" id="checkType" />
        </S.CheckboxLabel>
      </S.TD>
      <S.TD>
        <img src={goingCallDisplay()} style={{ marginLeft: "5px" }} />
      </S.TD>
      <S.TD>{callTimeValue()}</S.TD>
      <S.TD height={"100%"}>
        <img src={avatar} />
        <img
          style={{ display: picPhone === 0 ? "none" : "block" }}
          src={"/icons/picPhone.svg"}
        />
        <img
          style={{ display: picBrowser === 0 ? "none" : "inline-block" }}
          src={"/icons/picBrowser.svg"}
        />
      </S.TD>
      <S.TD>
        <span>+{formattedNumber} </span>
        <br />
        <span>{fromName}</span>
      </S.TD>
      <S.TD>
        <S.SourceContainer>{source}</S.SourceContainer>
      </S.TD>
      <S.TD>{DisplayCallRecognized()}</S.TD>
      <S.TD>
        <S.TimeValueDiv>{callTimeLength()}</S.TimeValueDiv>
        <S.CallsAudioContainer style={{ display: time === 0 ? "none" : "flex" }}>
          <S.CallTimeValue>{callTimeLength()}</S.CallTimeValue>
          <S.AudioStartButton />
          <S.AudioProgressbar>
            <S.ProgressbarCompleted style={{ width: "20%" }}> 
              <S.ListetingTime>{callTimeListening()}</S.ListetingTime>
            </S.ProgressbarCompleted>
          </S.AudioProgressbar>
          <S.DownloadButton
            onClick={() => getAudioCall(record, partnershipId)}
          />
          <S.StopDownloadButton />
        </S.CallsAudioContainer>
      </S.TD>
    </S.TR>
  );
};

export default CallString;
