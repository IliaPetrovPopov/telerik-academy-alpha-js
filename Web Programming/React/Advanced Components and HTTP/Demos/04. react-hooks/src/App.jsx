import "./App.css";
import Timer from "./components/Timer";
import useTimer from "./hooks/useTimer";

function App() {
  const time = useTimer();

  return (
    <div className="App">
      <div className="card">
        <h1>My Awesome App!</h1>
        <Timer time={time} />
      </div>
    </div>
  );
}

export default App;
