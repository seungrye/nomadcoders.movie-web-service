import { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    console.log("called only once at paged loaded");
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) => {
      return response.json();
    }).then(json => {
      setCoins(json);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>The Coins</h1>
      {loading ? <strong>Loading...</strong> :
        <>
          <select onChange={(event) => {
            console.log(event.target.value);
            const usd = document.getElementById("what-i-have-usd").value;
            const coinSym = event.target.value;
            const found = coins.find(coin => coin.symbol == coinSym);
            console.log("found", found);
            console.log("usd", usd);
            const whatIGot = parseFloat(usd) / found.quotes.USD.price;
            const toCoin = document.getElementById("what-i-got-coin");
            toCoin.value = whatIGot;

          }}>
            {coins.map((coin, index) => {
              return <option key={index} value={coin.symbol}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}</option>;
            })}
          </select>
          <div>
            <input id="what-i-have-usd" type="number" placeholder="가지고 있는 dollars" /> {"USD"}
            {" -> "}
            <input id="what-i-got-coin" type="number" placeholder="how can I got coin" disabled={true} /> {"Coin"}
          </div>
        </>
      }
    </div>
  );
}

export default CoinTracker;
