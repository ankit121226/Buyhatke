import React, { useState, useEffect } from "react";
import DefaultStyle from "./style";
export default function CoinListing(props) {
  const [coinData, setCoinsData] = useState([]);
  const [filteredCoinData, setfilteredCoinData] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://ankit-mock-api.getsandbox.com:443/order/getTickerWithVolume"
      ); // made Api response in Sandbox, due to Cors Issue
      const coinRes = await response.json();
      let coinList = [];
      for (let [key, value] of Object.entries(coinRes)) {
        coinList.push({ coin_name: key, ...(value ? value : {}) });
      }
      setCoinsData(coinList);
      setisLoading(false);
      setfilteredCoinData(coinList);
    };
    fetchData();
  }, []);

  // calculates % change in Last 24 Hour
  const percentageChangeinLast24Hr = (lastTradedPrice, yesterdayPrice) => {
    const PercentageChange =
      ((Number(lastTradedPrice) - Number(yesterdayPrice)) * 100) /
      Number(yesterdayPrice);
    return (
      <div
        className={`minTradeAmt ${
          PercentageChange >= 0 ? "positive" : "negative"
        }`}
      >
        {PercentageChange}
      </div>
    );
  };
  // pushed to Coin Details page 
  const gotoCoins = ({ coin_name }) => {
   const  selectedCoinData = coinData.filter(val => val.coin_name === coin_name);
    props.history.push({
      pathname: `/coins/${coin_name}`,
      state: selectedCoinData
    });
  };
  const handleSearchChange = (e) => {
    const { value } = e.target;
    const searchVal = value.toUpperCase();
    const filteredList = coinData.filter((val) => {
      let coin_name = val?.coin_name.toUpperCase();
      if (coin_name.includes(searchVal)) {
        return true;
      }
    });
    setfilteredCoinData(filteredList);
  };
  const Loader = () => {
    return <div className="loader">...Loading Coins</div>;
  };
  const Header = () => {
    return (
      <div className="coins">
        <div className="coinIcon">Coins</div>
        <div className="coinName">last Trade Vol.</div>
        <div className="floatPlace">Vol</div>
        <div className="minTradeAmt">% chnage in last 24 hr</div>
      </div>
    )
  }
  return (
    <DefaultStyle>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="search-filter">
            <input
              className="search"
              placeholder={"Search"}
              onChange={handleSearchChange}
            />
          </div>
         <Header />
          {filteredCoinData.map((val, ind) => {
            return (
              <div className="coins" key={ind} onClick={() => gotoCoins(val)}>
                <div className="coinIcon">{val?.coin_name}</div>
                <div className="coinName">{val?.last_traded_price || ""}</div>
                <div className="floatPlace">{val?.volume?.volume || ""}</div>
                {percentageChangeinLast24Hr(
                  val?.last_traded_price,
                  val?.yes_price
                )}
              </div>
            );
          })}
        </div>
      )}
    </DefaultStyle>
  );
}
