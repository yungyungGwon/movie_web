import {useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, [])
  return (
    <div> 
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select>
        {coins.map((coin)=> <option> {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} </option>)}
      </select>
    </div>
  );
}

export default App;
 
/*
NPM은 패키지 관리자이며 NPM을 사용하여 node.js 패키지를 설치할 수 있습니다

NPX는 node.js 패키지를 실행하는 도구입니다.
*/