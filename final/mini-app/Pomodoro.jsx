import { useState, useEffect, useRef } from "react";
import "./Pomodoro.css";
import { Space, Input } from "antd";

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const formattedTime = currentTime.toLocaleTimeString();
  const [time, setTime] = useState(3);
  const [state, setState] = useState("Work");
  const [N, setN] = useState(0);
  const [showInputs, setShowInputs] = useState(false);
  const [Resttime, setResttime] = useState("");
  const [Worktime, setWorktime] = useState("");
  const out = useRef(null);

  const handleClickOutside = (event) => {
    if (out.current && !out.current.contains(event.target)) {
      setShowInputs(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((prevTime) => prevTime - 1);
      if (N % 2 === 0 && time === 0) {
        setN(N + 1);
        setTime(parseInt(Resttime) || 3);
        setState("Rest");
      } else if (N % 2 === 1 && time === 0) {
        setN(N + 1);
        setTime(parseInt(Worktime) || 3);
        setState("Work");
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [time, state, N, Resttime, Worktime]);

  const handleSet = () => {
    setShowInputs(true);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`clock ${state === "Work" ? "clock-work" : "clock-rest"}`}>
      {formattedTime}
      <div>{time}</div>
      <div>{state}</div>
      <div>
        <button onClick={handleSet}>Set</button>
      </div>
      <Space>
        {showInputs && (
          <div className="input" ref={out}>
            <Space>
              <div className="settime">Time Rest</div>
              <Input
                className="input1"
                type="number"
                value={Resttime}
                onChange={(e) => setResttime(e.target.value)}
              />
            </Space>

            <Space>
              <div className="settime">Time work</div>
              <Input
                className="input2"
                type="number"
                value={Worktime}
                onChange={(e) => setWorktime(e.target.value)}
              />
            </Space>
          </div>
        )}
      </Space>
    </div>
  );
}

export default Clock;
