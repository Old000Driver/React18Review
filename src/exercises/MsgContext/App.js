import { useRef, useState, createContext, useContext } from "react";

const MsgContext = createContext();

function Son() {
  return (
    <div>
      <Son2></Son2>
    </div>
  );
}

function Son2() {
  const msg = useContext(MsgContext);
  return <div>Son2: {msg}</div>;
}

function App() {
  const msg = "this is app name.";

  return (
    <div className="App">
      <MsgContext.Provider value={msg}>
        <Son />
      </MsgContext.Provider>
    </div>
  );
}

export default App;
