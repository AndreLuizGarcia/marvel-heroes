import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Header = styled.header`
  display: flex;

  align-items: center;

  height: 8.2rem;
  padding: 1.6rem 2.4rem;

  background-color: #212121;

  gap: 2rem;
`;

export const MarvelLogo = styled(Link)`
  background: url('https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg');

  display: flex;
  width: 100%;
  max-width: 12.4rem;
  height: 5rem;

  background-size: cover;
  background-repeat: no-repeat;
`;

export const Main = styled.main`
  flex: 1;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1rem;

  background-color: #a8a0a0;
`;

export const HomeLink = styled(Link)`
  color: white;
  font-size: 2rem;

  margin-top: 2.5rem;

  &:hover {
    color: red;
  }
`;
