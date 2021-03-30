import styled from 'styled-components'
import { slideInNoScale } from '../../styles/animation'

export const ErrorDiv = styled.div`
    position: absolute;
    width: 500px;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #F45866;
    background: #fff;
    border-radius: 8px;
    height: 70px;
    border: 2px solid #F45866;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    ${slideInNoScale()}
`
