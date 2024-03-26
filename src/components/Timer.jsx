import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { PiTriangleFill } from "react-icons/pi";
import React, { useState } from "react";
import "./Timer.css";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="timer-container">
      <div className="timer-main">
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={timer}
          colors={["#FF6A6A"]}
          size={120}
          strokeWidth={5}
        >
          {({ remainingTime }) => {
            if (remainingTime === 0) {
              setIsPlaying(false);
              setHour(0);
              setMinute(0);
              setSecond(0);
              return <div className="timer-timeup">Time is up!</div>;
            } else {
              return (
                <div className="timer-show">
                  <div>{Math.floor(remainingTime / 3600)}:</div>
                  <div> {Math.floor((remainingTime % 3600) / 60)}:</div>
                  <div>{remainingTime % 60}</div>
                </div>
              );
            }
          }}
        </CountdownCircleTimer>
      </div>
      <div className="timer-button-main">
        <div className="timer-button">
          {/* hours */}
          <div className="timer-hours">
            <h2 className="hour-heading">Hours</h2>
            <PiTriangleFill
              onClick={() => {
                setTimer((prev) => prev + 3600);
                setHour((prev) => prev + 1);
              }}
            />
            <span style={{ color: "white", fontSize: "x-large" }}>{hour}</span>
            <PiTriangleFill
              onClick={() => {
                if (timer >= 3600) {
                  setTimer((prev) => prev - 3600);
                  setHour((prev) => prev - 1);
                }
              }}
              className="down-arrow"
            />
          </div>

          {/* minutes */}
          <div className="timer-minutes">
            <h2 className="minute-heading">Minutes</h2>
            <PiTriangleFill
              onClick={() => {
                setTimer((prev) => prev + 60);
                setMinute((prev) => prev + 1);
              }}
            />
            <span style={{ color: "white", fontSize: "x-large" }}>
              {minute}
            </span>
            <PiTriangleFill
              onClick={() => {
                if (timer >= 60) {
                  setTimer((prev) => prev - 60);
                  setMinute((prev) => prev - 1);
                }
              }}
              className="down-arrow"
            />
          </div>

          {/* seconds */}
          <div className="timer-seconds">
            <h2 className="seconds-heading">Seconds</h2>
            <PiTriangleFill
              onClick={() => {
                setTimer((prev) => prev + 1);
                setSecond((prev) => prev + 1);
              }}
            />
            <span style={{ color: "white", fontSize: "x-large" }}>
              {second}
            </span>
            <PiTriangleFill
              onClick={() => {
                if (timer >= 0) {
                  setTimer((prev) => prev - 1);
                  setSecond((prev) => prev - 1);
                }
              }}
              className="down-arrow"
            />
          </div>
        </div>

        <div className="timer-startbutton-main">
          <button
            disabled={isPlaying}
            onClick={() => setIsPlaying(true)}
            className="timer-startbutton"
          >
            Start
          </button>
        </div>
      </div>
    </section>
  );
};

export default Timer;
