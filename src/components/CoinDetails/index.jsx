import React from 'react'
import DefaultStyle from './style'
export default function CoinDetails(props) {
    const {coin_name, highest_buy_bid, last_traded_price, lowest_sell_bid, volume, yes_price} = props?.location?.state[0]
     return (
        <DefaultStyle>
           <div className="cards">
                <div className="coin">{coin_name}</div>
                <div className="buy-sell">
                    <div className="highest">highest Buy Price : {highest_buy_bid}</div>
                    <div className="lowest">Lowest Sell Price :{lowest_sell_bid}</div>
                </div>
               <div className="last-yes">
                <div className="ltp">Last Traded Price :{last_traded_price}</div>
                <div className="yes">yes_price :{yes_price}</div>
               </div>
               <div>
                  <div className="vol-det"> Volumn Details:</div>
                  <div className="details">
                    <div> Volume :{volume?.volume}</div>
                    <div>Max Vol:{volume?.max}</div>
                    <div> Min Vol: {volume?.min}</div>
                  </div>
               </div>
           </div>
        </DefaultStyle>
    )
}
