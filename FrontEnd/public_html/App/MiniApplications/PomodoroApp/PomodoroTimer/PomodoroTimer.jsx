/* eslint-disable react/prop-types */
import { Space } from "antd";
import RealTime from "./RealTime/RealTime";
import SelectTimerMode from "./SelectTimerMode/SelectTimerMode";
import Timer from "./TimerCounter/TimerCounter";
import ButtonStart from "./Button/ButtonStart";
import ButtonSkip from "./Button/ButtonSkip";

export default function PomodoroTimer({
  pomodoro,
  shortBreak,
  longBreak,
  timerMode,
  setTimerMode,
  isPause,
  setIsPause,
  statusOverTime,
  isSkip,
  setIsSkip,
  autoMode,
}) {
  return (
    <Space direction="vertical" style={{ position: "relative" }}>
      <Space
        direction="horizontal"
        style={{
          width: "30rem",
          minHeight: "100%",
          rowGap: 0,
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
        size="large"
      >
        <SelectTimerMode
          value={"Pomodoro"}
          {...{ timerMode, setTimerMode }}
        ></SelectTimerMode>
        <SelectTimerMode
          value={"Short Break"}
          {...{ timerMode, setTimerMode }}
        ></SelectTimerMode>
        <SelectTimerMode
          value={"Long Break"}
          {...{ timerMode, setTimerMode }}
        ></SelectTimerMode>
      </Space>
      <Space direction="vertical">
        <RealTime></RealTime>
        <Timer
          {...{
            pomodoro,
            shortBreak,
            longBreak,
            timerMode,
            setTimerMode,
            isPause,
            isSkip,
            setIsPause,
            statusOverTime,
            autoMode,
          }}
        />
        <Space style={{ position: "relative" }}>
          <ButtonStart {...{ isPause, setIsPause }} />
          <ButtonSkip {...{ isPause, isSkip, setIsSkip }} />
        </Space>
      </Space>
    </Space>
  );
}
