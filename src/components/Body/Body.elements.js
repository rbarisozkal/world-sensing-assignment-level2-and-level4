import styled from "styled-components";

export const PopUpMenu = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: 2;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
  justify-self: center;
  position: absolute;
  width: 516px;
  height: 650px;
  left: 25%;
  background: #ffffff;
  box-shadow: 0px 10px 30px rgba(17, 38, 146, 0.05);
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  position: static;
  width: 397px;
  height: 87px;
  left: 19.5px;
  top: 0px;

  h1 {
    position: static;
    width: 363px;
    height: 43px;
    left: 17px;
    top: 0px;

    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 33px;
    line-height: 130%;
    /* identical to box height, or 43px */
    color: #000000;
  }
  span {
    position: static;
    width: 397px;
    height: 28px;
    left: 0px;
    top: 59px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 175%;

    color: #8a92a6;
  }
`;
export const LittleCardBody = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  flex-grow: inherit;
  label {
    display: flex;
    justify-self: flex-start;
    
    width: 68px;
    height: 28px;
    left: 0px;
    top: 0px;
    width: 100%;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 175%;
    color: #8a92a6;
  }
`;
export const SensorModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  flex-grow: 0;
  position: static;
  width: 436px;
  height: 44px;
  left: 0px;
  top: 36px;

  label {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 175%;
    /* identical to box height, or 28px */

    /* 8A92A6 Text Color 2 */

    color: #8a92a6;
  }
  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;

    position: static;
    width: 436px;
    height: 44px;
    left: 0px;
    top: 0px;

    /* FFFFFF Bg 1 */

    background: #ffffff;
    border: 1px solid #286ac5;
    box-sizing: border-box;
    border-radius: 4px;
  }
`;
export const HandlerGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  justify-content: space-between;
  position: static;
  width: 436px;
  height: 100px;
  left: 0px;
  top: 36px;
  
`;
export const Handlers = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 8px 16px;

  position: static;
  width: 200.5px;
  height: 100px;
  left: 0px;
  top: 0px;

  /* FFFFFF Bg 1 */

  background: #ffffff;
  border: 1px solid #286ac5;
  box-sizing: border-box;
  border-radius: 4px;
`;
export const HandlerArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  align-self: flex-end;
  position: static;
  width: 200.5px;
  height: 100px;
  left: 235.5px;
  top: 0px;

  /* FFFFFF Bg 1 */

  background: #ffffff;
  border: 1px solid #286ac5;
  box-sizing: border-box;
  border-radius: 4px;
`;
export const OutputGr = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  justify-content: space-between;
  position: static;
  width: 436px;
  height: 108px;
  left: 0px;
  top: 248px;
  label {
    position: static;
    width: 61px;
    height: 28px;
    left: 0px;
    top: 0px;

    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 175%;

    color: #8a92a6;
  }
`;
export const Outputs = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 8px 16px;

  position: static;
  width: 200.5px;
  height: 72px;
  left: 0px;
  top: 0px;

  /* FFFFFF Bg 1 */

  background: #ffffff;
  border: 1px solid #286ac5;
  box-sizing: border-box;
  border-radius: 4px;
`;
export const OutputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 16px;

  position: static;
  width: 200.5px;
  height: 72px;
  left: 235.5px;
  top: 0px;

  /* FFFFFF Bg 1 */

  background: #ffffff;
  border: 1px solid #286ac5;
  box-sizing: border-box;
  border-radius: 4px;
`;
export const AddButton = styled.button`
  display: flex;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;

  position: static;
  width: 130px;
  height: 44px;
  left: 235.5px;
  top: 0px;
  color: #ffffff;
  background: #286ac5;
  box-shadow: 0px 0px 3px rgba(58, 87, 232, 0.24);
  border-radius: 4px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 35px;
`;
export const Buttons = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const CloseButton = styled.button`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  text-align: center;
  width: 130px;
  height: 44px;
  left: 70.5px;
  top: 0px;

  border: 1px solid #286ac5;
  box-sizing: border-box;
  border-radius: 4px;

  margin: 0px 35px;
`;

export const BodyContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 24px 70px;
  position: absolute;
  width: 1583px;
  height: 706px;
  left: 297px;
  top: 113px;
  background: #ffffff;
  box-shadow: 0px 10px 13px rgba(17, 38, 146, 0.05);
  border-radius: 8px;
`;
export const BodyDevicesConfiguration = styled.div`
  display: inline;

  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 33px;
  line-height: 130%;
  letter-spacing: 0.04em;
  color: #04040b;
  flex: none;
  order: 0;
  margin-bottom: 24px;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
export const SensorModalCard = styled.div`
  align-self: flex-start;
  padding: 0px 0px 20px;
  width: 338px;
  height: 261px;
  left: 0px;
  top: 0px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0px 2px 4px rgba(17, 38, 146, 0.15);
  border-radius: 8px;
  margin: 0px 32px;
  margin-bottom: 12px;
  & h1 {
    box-sizing: border-box;
    padding: 15px 0px 15px 24px;
    width: 100%;
    background-color: #e9ecef;
    color: #212529;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 0px;
    font-size: 20px;
    font-family: "Rubik", sans-serif;
  }
`;
export const HandlersTable = styled.div`
  display: flex;
  flex-direction: row;
  & span {
    display: inline;
    margin-top: 24px;
    text-align: center;
    font-family: "Rubik", sans-serif;
    color: #286ac5;
    width: 40%;
  }
`;
export const HandlersOl = styled.ol`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
`;
export const HandlersLi = styled.li`
  font-size: 16px;
  line-height: 19px;
  font-family: "Rubik", sans-serif;
  /* identical to box height */
  color: #212529;
  /* Inside Auto Layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 8px 0px;
`;
export const OutPutsTable = styled.div`
  display: flex;
  flex-direction: row;
  & span {
    display: inline;
    margin-top: 24px;
    text-align: center;
    font-family: "Rubik", sans-serif;
    color: #286ac5;
    width: 40%;
  }
`;
export const OutPutsOl = styled.ol`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
`;
export const OutPutsLi = styled.li`
  font-size: 16px;
  line-height: 19px;
  font-family: "Rubik", sans-serif;
  /* identical to box height */
  color: #212529;
  /* Inside Auto Layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 8px 0px;
`;

export const AddSensorModalCard = styled.div`
  align-self: flex-start;
  padding: 0px 0px 20px;
  width: 338px;
  height: 261px;
  left: 0px;
  top: 0px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0px 2px 4px rgba(17, 38, 146, 0.15);
  border-radius: 8px;
  margin: 0px 32px;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  & i {
    align-self: center;
    color: rgba(40, 106, 197, 0.25);
  }
  &:hover {
    cursor: pointer;
  }
`;
