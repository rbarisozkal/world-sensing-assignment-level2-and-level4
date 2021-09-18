import styled from "styled-components";
export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 32px;
  position: absolute;
  width: 1663px;
  height: 76px;
  left: 257px;
  top: 0px;
  box-sizing: border-box;
  background: #ffffff;
  backdrop-filter: blur(64px);
`;
export const LanguageButton = styled.button`
  align-self: flex-end;
  width: 55px;
  height: 55px;
  border: none;
  background: #ffffff;
  backdrop-filter: blur(64px);
  &:hover {
    cursor: pointer;
  }
  & .fill {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  & .fill img {
    object-fit: cover;
    width: 50px;
    height: 100px;
  }
`;
export const NotificationButton = styled.button`
  align-self: flex-end;
  align-content: center;
  width: 55px;
  height: 55px;
  border: none;
  background: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;
export const UserSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;

  position: static;
  width: 177px;
  height: 45px;
  left: 87px;
  top: 0px;

  /* Inside Auto Layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 16px;
  & i {
    justify-content: flex-start;
  }
`;
export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 0px;
  margin-left: 2px;
  margin-right: 5px;
  font-family: "Inter", sans-serif;
  position: static;
  width: 177px;
  height: 45px;
  left: 87px;
  top: 0px;
  margin: 0px 16px;
  & .Adminson {
    display: inline-block;
    font-weight: 700;
  }
  & .Sysadmin {
    display: inline-block;
    font-weight: 200;
    color: grey;
  }
`;
