import styled from 'styled-components';
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
  border-radius: 30px;

 :before {
  content: '';
  position: absolute;
  width: 100%;
  background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
  height: 130%;
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
  background: #07182E;
  ;
  inset: 5px;
  border-radius: 15px;
}  
`;

export const SectionEsquerda = styled.div`
display: flex;
background-color: #07182E;
width: 50%;
height: 98%;
align-items: center;
justify-content: center;
z-index: 1;
margin-left: 5px;
border-top-left-radius: 30px;
border-bottom-left-radius: 25px;
padding: 40px;


`;

export const SectionDireita = styled.div`
display: flex;
flex: 1;
background-color: #07182E;
width: 100%;
height: 100%;
border-radius: 8px;
align-items: center;
justify-content: center;
z-index: 1;

@media (max-width: 768px) {
  display: none;
}
`;

export const Imagem = styled.img`
width: 100%;
background-size: cover;
`;

export const Autor = styled.strong`
color: #fff;
display: flex;
justify-content: flex-end;
padding: 10px;
margin-right: 20px;
`;

export const AreaBotao = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
`;

export const Botao = styled.button`
 align-items: center;
 background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
 border: 0;
 border-radius: 8px;
 box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
 box-sizing: border-box;
 color: #FFFFFF;
 display: flex;
 font-family: Phantomsans, sans-serif;
 font-size: 15px;
 justify-content: center;
 line-height: 1em;
 max-width: 100%;
 min-width: 140px;
 padding: 10px;
 text-decoration: none;
 user-select: none;
 -webkit-user-select: none;
 touch-action: manipulation;
 white-space: nowrap;
 cursor: pointer;
 transition: all .3s;

:active,
:hover {
 outline: 0;
}

button span {
 background-color: rgb(5, 6, 45);
 padding: 16px 24px;
 border-radius: 6px;
 width: 100%;
 height: 100%;
 transition: 300ms;
}

button:hover span {
 background: none;
}

:active {
 transform: scale(0.9);
}
`;

export const Titulo = styled.h1`
font-size: 30px;

@media (max-width: 768px) {
  font-size: 15px;
}
`;