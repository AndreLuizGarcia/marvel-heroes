import { Outlet } from 'react-router-dom';

import * as S from './styles';

function Layout() {
  return (
    <>
      <S.Header>
        <S.MarvelLogo to={'/'} about="Marvel logo" />
        <S.HomeLink to={'/'}>Home</S.HomeLink>
      </S.Header>
      <S.Main>
        <Outlet />
      </S.Main>
      <S.Footer>Data provided by Marvel. © 2023 MARVEL</S.Footer>
    </>
  );
}

export default Layout;
