import styled from 'styled-components';
import cao_1 from '../../assets/cao_1.jpg';
import wallpaper from '../../assets/wallpapr.jpg';

export const Container = styled.div`
background-image: url(${wallpaper});
background-repeat: no-repeat;
background-size:  cover;
display: flex;
width: 100vw;
height: 100vh;
flex-direction: column;
align-items: center;
`;

export const Content = styled.div`
  margin-top: 60px;
  width: 90%;
  height: 500px;
  background: #07182E;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
  justify-content: space-around;

:before {
  content: '';
  position: absolute;
  width: 110%;
  background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
  height: 90%;
  animation: rotBGimg 3s linear infinite;
  transition: all 0.2s linear;
}

@keyframes rotBGimg {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

:after {
  content: '';
  position: absolute;
  background-image: url(${cao_1});
  background-size: cover;

  ;
  inset: 5px;
  border-radius: 15px;

}  
`;


export const Titulo = styled.h1`
font-size: 50px;
color: #fff;
font-weight: 700;
z-index: 1;
`;

export const AreaBotao = styled.div`
display: flex;
padding-left: 7%;
z-index: 1;
`;

export const Botao = styled.button`
border: none;
width: 300px;
height: 60px;
padding: 10px;
border-radius: 67px;
background-color: #01008C;
z-index: 1;
`;

export const Texto = styled.strong`
color: #fff;
font-size: 20px;
`;
