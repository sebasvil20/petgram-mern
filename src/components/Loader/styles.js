import styled, { keyframes } from 'styled-components'

const loadingKeyframes = keyframes`
    from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`

export const LoaderDiv = styled.div`
  color: #ffffff;
  font-size: 11px;
  text-indent: -99999em;
  margin: 90px auto;
  position: relative;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  &:before {
    border-radius: 50%;
    position: absolute;
    content: "";
    width: 5.2em;
    height: 10.2em;
    background: #ddd;
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    -webkit-transform-origin: 5.1em 5.1em;
    transform-origin: 5.1em 5.1em;
    -webkit-animation: load2 2s infinite ease 1.5s;
    animation: ${loadingKeyframes} 2s infinite ease 1.5s;
  }
  &:after {
    border-radius: 50%;
    position: absolute;
    content: "";
    width: 5.2em;
    height: 10.2em;
    background: #ddd;
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 4.9em;
    -webkit-transform-origin: 0.1em 5.1em;
    transform-origin: 0.1em 5.1em;
    -webkit-animation: load2 2s infinite ease;
    animation: ${loadingKeyframes} 2s infinite ease;
  }


`
