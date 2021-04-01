import styled from 'styled-components'

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled]{
    opacity: .3;
  }
`

export const Form = styled.form`
  padding: 16px 10px;
`

export const Title = styled.h2`
    font-size: 26px;
    font-weight: 500px;
    padding: 8px 0;
    margin: 10px 0;
`

export const Error = styled.span`
  color: red;
  font-size: 14px;
  padding: 8px 0;
`
