import styled from "styled-components";
export const SideBarHeaderContainer=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
background-color: #FFFFFF;
position: static;
width: 257px;
height: 1080px;
left: 0px;
top: 0px;
`;
export const SideBarHeader=styled.h1`
position: static;
height: 23px;
left: 32.43%;
right: 24.77%;
top: calc(50% - 31px/2 + 4px);
align-self: center;
font-family: 'Rubik', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 130%;
/* or 31px */
/* 232D42 Text Color 1 */
color: #232D42;
/* Inside Auto Layout */
flex: none;
order: 1;
flex-grow: 0;
margin: 26.5px 8px;
& i{
  color: #286AC5;
}
`;
export const Seperator = styled.div`
order: 2;
height: 1px;
width: 100%;
box-sizing: border-box;
box-shadow: 0px 10px 30px rgba(17, 38, 146, 0.05);
background: #E9ECEF;
`;
export const Preferences= styled.div`
order: 3;
width: 257px;
height: 157px;
display: flex;
justify-content: flex-start;
flex-direction: column;
align-content: center;
`;
export const ConfigButton = styled.button`
font-size: 16px;
align-self: center;
width: 233px;
height: 44px;
left: 12px;
top: 0px;
border-radius: 4px;
flex: none;
order: 0;
flex-grow: 0;
margin: 4px 4px;
color:#fff;
background: #286AC5;

/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 4px 4px;
`;
export const HandlersButton = styled.button`
font-size: 16px;
align-self: center;
width: 233px;
height: 44px;
left: 12px;
top: 0px;
border-radius: 4px;
flex-grow: 0;
margin: 4px 4px;
background-color: #fff;
color: grey;
justify-content: center;
text-align: center;
display: inline-block;
text-align: center;
align-items: flex-start;
& i{
  margin: 5px;
}
`;
export const OutputsButton = styled.button`
& i{
  margin: 5px;
}
font-size: 16px;
align-self: center;
width: 233px;
height: 44px;
left: 12px;
top: 0px;
border-radius: 4px;
flex-grow: 0;
margin: 4px 4px;
background-color: #fff;
color: grey;
justify-content: center;
text-align: center;
display: inline-block;
text-align: center;
align-items: flex-start;
`;

