import { useState } from "react";

function useToggle() {
  const [value, setValue] = useState(true);
  const toggle = () => setValue(!value);
  return {
    value,
    toggle,
  };
}
function App() {
  const { value, toggle } = useToggle();
  return (
    <div className="App">
      {value && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  );
}

export default App;
