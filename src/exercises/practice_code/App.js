import { useRef, useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const showDom = () => {
    console.log("inputRef", inputRef);
  };
  return (
    <div className="App">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        ref={inputRef}
      />
      <button onClick={showDom}>获取 Input Dom</button>
    </div>
  );
}

export default App;
