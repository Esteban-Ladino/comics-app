import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-column-gap: 20px;
  grid-row-gap: 50px;
  list-style: none;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  & li a {
    text-decoration: none;
    color: black;
  }
`
