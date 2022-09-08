import "./styles.css";
import React from "react";
export default function App() {
  const [time, setTime] = React.useState(300);
  const [pause, setPause] = React.useState(false);
  React.useEffect(() => {
    if (pause === false) {
      setTimeout(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  });
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <h2>
        {Math.floor(time / 3600)
          .toString()
          .padStart(2, "0") +
          ":" +
          Math.floor(time / 60)
            .toString()
            .padStart(2, "0") +
          ":" +
          (time % 60).toString().padStart(2, "0")}
      </h2>
      <button
        onClick={() => {
          setPause((prev) => !prev);
        }}
      >
        {pause ? "Unpause" : "Pause"}
      </button>
    </div>
  );
}
