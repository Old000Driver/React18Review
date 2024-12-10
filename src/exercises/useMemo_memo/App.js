import { useState } from "react";

const MemoSon = memo(function Son({ list }) {
  console.log("子组件已被渲染");
  return <div>this is Son {list}</div>;
});

function App() {
  const [count, setCount] = useState(0);
  const list = useMemo(() => {
    return [1, 2, 3];
  });

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>changeCount</button>
      <MemoSon list={list}></MemoSon>
    </div>
  );
}

export default App;
