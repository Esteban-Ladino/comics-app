import styled from 'styled-components'

export const Main = styled.main`
  max-width: 1440px;
  margin: 50px auto 0;
  text-align: center;
  & input {
    width: 60%;
    height: 35px;
    margin-bottom: 30px;
    padding: 0 4%;
    border: 1px solid gray;
    border-radius: 20px;
    box-shadow: 0px 2px 2px rgba(64, 64, 64, 0.7);
    outline: none;
    font-size: 17px;
    color: black;
  }
  & h1 {
    margin-bottom: 40px;
  }
`
