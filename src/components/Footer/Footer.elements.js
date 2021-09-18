import styled from "styled-components";
export const FooterContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 8px 12px;
box-sizing: border-box;
position: absolute;
width: 1663px;
height: 47px;
left: 257px;
top: 1033px;

background: #FFFFFF;
`;
export const FooterSocialMedia = styled.div`
display: flex;
flex-direction: row;
align-self: flex-start;
justify-content:flex-start ;
width:120px ;
height: 24px;
margin-left:24px;

& i{
    display: inline-block;
    margin-right: 24px;
}
& i .fa-linkedin{
    color:#3D83D9;
}
&  .fa-linkedin ,.fa-2x{
    color:#395196;
}
`;
export const Link = styled.div`
text-decoration: underline;
font-size: 12px;
display: flex;
justify-content: center;
align-content: flex-end;
color:#286AC5;
`;