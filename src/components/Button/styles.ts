import styled from '@emotion/styled';

export const MainButton = styled.button`
  height: 48px;
  border: none;
  padding-top: 12px;
  padding-right: 40px;
  padding-bottom: 12px;
  padding-left: 40px;
  background:${({ disabled}) => disabled ? '#bebec7' :'#3678B4'};
  border-radius: 50px;
  color: white;
  font-family: Lato, Geneva, Tahoma, sans - serif;
  font-size: 20px;
  cursor: pointer;
  color: white;
  width: 100%;
`
