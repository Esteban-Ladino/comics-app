import React from 'react'
import { Link } from '@reach/router'
import { StyledHeader } from './styles'

const Header = () => {
  return (
    <StyledHeader>
      <Link to='/'>
        <svg viewBox='0 0 36 52' xmlns='http://www.w3.org/2000/svg'>
          <rect fill='#EC1D24' width='100%' height='100%' />
          <path fill='#FEFEFE' d='M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z' />
        </svg>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='/'>Comics</Link>
          </li>
          <li>
            <Link to='/series'>Series</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  )
}

export default Header
