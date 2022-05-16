import styled from 'styled-components';
import wallpaper from '../../assets/wallpapr.jpg';
import cao_1 from '../../assets/cao_1.jpg';

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
  width: 110%;
  height: 90%;
  background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
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
  background-size: cover;
  ;
  inset: 5px;
}  
`;

export const SectionEsquerda = styled.div`
display: flex;
flex: 2;
background-color: #07182E;
width: 100%;
height: 98%;
align-items: center;
justify-content: center;
z-index: 1;
margin-left: 5px;
border-top-left-radius: 25px;
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
`;

export const Imagem  = styled.img`
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
background-color: #07185E;
padding: 10px;
border-radius: 10px;
`;