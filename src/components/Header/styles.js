import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  height: 100px;
  padding: 0 15%;
  background: #EC1D24;
  & svg {
    height: 100px;
  }
  & nav {
    display: flex;
    align-items: center;
    margin-left: 30px;
    & ul {
      display: flex;
      list-style: none;
      font-size: 24px;
      & li {
        margin-right: 20px;
        & a {
          text-decoration: none;
          text-transform: uppercase;
          color: white;
        }
      }
    }
  }
`
