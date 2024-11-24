import { useEffect, useState } from "react";

const URL = "http://geek.itheima.net/v1_0/channels";

function App() {
  const [list, setList] = useState([]);
  async function getList() {
    const res = await fetch(URL);
    const jsonRes = await res.json();
    if (jsonRes.data.channels) setList(jsonRes.data.channels);
    console.log(jsonRes);
  }

  useEffect(() => {
    getList();
  }, []);
  return (
    <div className="App">
      {list.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
}

export default App;
