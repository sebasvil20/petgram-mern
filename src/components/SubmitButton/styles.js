import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  display: block;
  height: 32px;
  color: #fff;
  border-radius: 3px;
  background: #8d00ff;
  text-align: center;
  &[disabled]{
    opacity: .3;
  }
`
