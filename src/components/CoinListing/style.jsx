import styled from "styled-components";
const DefaultStyle = styled("div")`
  background-color: #f5f5f5;
  .container {
    width: 96%;
    margin: auto;
    padding: 10px;
  }
  .coins {
    background-color: white;
    padding: 14px;
    display: flex;
    cursor: pointer;
  }
  .coinIcon,
  .coinName,
  .floatPlace,
  .minTradeAmt {
    flex-basis: 25%;
  }
  .positive {
    color: green;
  }
  .negative {
    color: red;
  }
  .minTradeAmt {
    text-align: center;
  }
  .coins:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.04);
  }
  .search {
    height: 28px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  .loader {
    text-align: center;
    height: 100vh;
    font-size: 40px;
  }
`;

export default DefaultStyle;
