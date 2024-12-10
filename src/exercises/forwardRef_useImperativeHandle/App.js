import { forwardRef, useImperativeHandle, useRef } from "react";

const Son = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  const focusHandler = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(ref, () => {
    return {
      focusHandler,
    };
  });
  return <input type="text" ref={inputRef} />;
});

function App() {
  const sonRef = useRef(null);
  const focusHandler = () => {};
  return (
    <div className="App">
      <Son ref={sonRef} />
      <button onClick={focusHandler}>focus</button>
    </div>
  );
}

export default App;
