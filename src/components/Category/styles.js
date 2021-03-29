import styled from 'styled-components'
import {Link as LinkRouter} from '@reach/router'

export const Link = styled(LinkRouter)`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    width: 60px;
`

export const Image = styled.img`
    border: 3px solid #FFFFF3;
    box-shadow: 0px 10px 15px rgba(0,0,0,.2);
    border-radius: 50%;
    height: auto;
    overflow: hidden;
    object-fit: cover;
    height: 60px;
    width: 60px;
`
