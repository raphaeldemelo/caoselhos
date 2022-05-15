import React from 'react';

import {
    Container,
    Logo,
} from './styles';

import Patas from '../../assets/patas.svg';

export default function Header() {
    return (
        <Container>
            <h1>Cãoselhos.pets</h1>
            <Logo src={Patas} />
        </Container>
    );
}