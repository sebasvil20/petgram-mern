import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { slideIn2 } from '../../styles/animation'

export const Nav = styled.nav`
    align-items: center;
    background: #fcfcfc;
    border-top: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-around;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    position: fixed;
    width: 100%;
    height: 60px;
    max-width: 500px;
    z-index: 2;
`

export const Link = styled(LinkRouter)`
    color: #888;
    display: inline-flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    &[aria-current]{
        color: #000;

        &:after{
            ${slideIn2()};
            content:'.';
            position: absolute;
            bottom: 0;
            font-size: 34px;
        }
    }
`
