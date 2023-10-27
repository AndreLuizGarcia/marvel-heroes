import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin: 2rem;
`;

export const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

  max-width: 102rem;
  gap: 2rem;

  justify-content: center;
  align-items: center;

  margin: 4rem;
`;

export const PaginationWrapper = styled.div`
  width: 100%;
  max-width: 30rem;
`;
