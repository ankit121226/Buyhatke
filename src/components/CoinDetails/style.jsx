import styled from "styled-components";
const DefaultStyle = styled("div")`
 .cards{
  width: 50%;
    margin: auto;
    background: aquamarine;
    padding: 35px;
    margin-top: 4rem;
 }
 .coin{
    font-size: 21px;
    text-align: center;
    padding-top: 12px;
 }
 .buy-sell, .last-yes,.details{
    display: flex;
    justify-content: space-around;
    font-size: 18px;
    margin-top: 15px;
 }
 .highest, .lowest, .ltp, .yes{
   flex-basis: 50%;
   text-align: center;
 }
 .vol-det{
  padding: 26px;
  color: blueviolet;
  font-size: 20px;
 }
`;

export default DefaultStyle;
