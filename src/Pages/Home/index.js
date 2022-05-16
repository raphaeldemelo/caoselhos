import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Botao from '../../components/BotaoConselho';

import {
    Container,
    Content,
    Titulo,
    AreaBotao,
} from './styles';

export default function Home() {
    return (
        <Container>
            <Header />
            <Content>
                <Titulo>Peça um conselho <br />para o doguinho</Titulo>
                <AreaBotao>
                    <Link to='/conselhos'>
                        <Botao />
                    </Link>
                </AreaBotao>
            </Content>
        </Container>
    );
}