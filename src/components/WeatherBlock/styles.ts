import styled from '@emotion/styled';

export const WeatherBlockContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color:rgba(47, 71, 111, 0.8);
flex-direction: row;
height: 180px;
color: white;
padding: 25px;
border-radius: 40px;
width: 710px;
`

export const TempNameContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
`

export const IconContainer = styled.div`
width: 290px;
height: 74px;
padding: 50px;
display: flex;
direction: row;
align-items: center;
justify-content: center;
`

export const City = styled.div`
font-size: 20px;
`

export const Temp = styled.div`
font-size: 57px;
`
