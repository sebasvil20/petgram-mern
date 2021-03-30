import { keyframes, css } from 'styled-components'

const fadeInKeyFrames = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
    }
    to {
        filter: blur(0);
        opacity: 1;
    }
`

const slideInKeyFrames = keyframes`
    from {
        transform: translate3d(0, -100px, 0) scale(.5);
    }
    to {
        transform: translate3d(0, 0, 0) scale(.5);
    }
`

const slideInKeyFramesNoScale = keyframes`
    from {
        margin-top: -200px;
    }
    to {
        margin-top: 0px;
    }
`

const slideIn2KeyFrames = keyframes`
    from {
        transform: translate3d(0, 100px, 0) scale(.5);
    }
    to {
        transform: translate3d(0, 10, 0) scale(.5);
    }
`

export const slideInNoScale = ({ time = '1s', type = 'ease' } = {}) => css`
animation: ${time} ${slideInKeyFramesNoScale} ${type} forwards;
`

export const slideIn2 = ({ time = '1s', type = 'ease' } = {}) => css`
animation: ${time} ${slideIn2KeyFrames} ${type} forwards;
`

export const slideIn = ({ time = '1s', type = 'ease' } = {}) => css`
    animation: ${time} ${slideInKeyFrames} ${type} forwards;
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`

    animation: ${time} ${fadeInKeyFrames} ${type};

`
