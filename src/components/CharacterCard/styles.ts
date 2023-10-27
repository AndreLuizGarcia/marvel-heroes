import { Link } from 'react-router-dom';

import { Card as CardBluePrint } from '@blueprintjs/core';
import styled from 'styled-components';

export const Card = styled(CardBluePrint)`
  width: 24rem;
  height: 44.4rem;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Description = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;

  height: 9rem;
`;

export const SeeMore = styled(Link)``;
