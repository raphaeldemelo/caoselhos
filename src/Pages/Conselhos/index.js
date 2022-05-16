import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import cao_5 from '../../assets/cao_5.jpg';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import {
    Container,
    Content,
    SectionDireita,
    SectionEsquerda,
    Imagem,
    Autor,
    AreaBotao,
    Botao,
} from './styles';

export default function Conselhos() {

    const [conselho, setConselho] = useState([]);

    useEffect(() => {
        async function carregaConselho() {
            const response = await api.get('/advice')
            setConselho(response.data.slip);
        }
        carregaConselho();
    }, []);

    function atualizarPagina() {
        window.location.reload();
    }

    return (
        <Container>
            <Header />
            <Content>
                <SectionEsquerda>
                    <div>
                        <h1><span style={{ color: '#ff30ff' }}>"</span>{conselho.advice}<span style={{ color: '#ff30ff' }}>"</span></h1>
                        <Autor><span style={{ color: '#ff30ff', marginRight: 10 }}>-</span>Cão</Autor>
                        <AreaBotao onClick={atualizarPagina}>
                            <Link to='/conselhos' refresh={true}>
                                <Botao>
                                    <h1>Próximo conselho</h1>
                                </Botao>
                            </Link>
                        </AreaBotao>
                    </div>
                </SectionEsquerda>

                <SectionDireita>
                    <Imagem src={cao_5} alt='' />
                </SectionDireita>

            </Content>
        </Container>
    );
}