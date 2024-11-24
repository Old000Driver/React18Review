import { useRef, useState } from "react";

function Son(props) {
  console.log("props", props);
  const sonMsg = "son1 msg";
  return (
    <div>
      son1
      <button onClick={() => props.onGetSonMsg(sonMsg)}> send</button>
    </div>
  );
}

function Son2(props) {
  return <div>son2: {props.msg}</div>;
}

function App() {
  const name = "this is app name.";
  let [son1Msg, setSon1Msg] = useState("");
  const onGetSonMsg = (msg) => {
    setSon1Msg(msg);
  };
  return (
    <div className="App">
      <Son name={name} onGetSonMsg={onGetSonMsg}></Son>
      <Son2 msg={son1Msg}></Son2>
    </div>
  );
}

export default App;
