import React from 'react';

import {
    Container,
    Logo,
    Icone,
} from './styles';

import Patinhas from '../../assets/patinha.svg';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Container>
            <Link to='/'>
                <Logo src={logo}/>
            </Link>
            <Icone src={Patinhas} />
        </Container>
    );
}