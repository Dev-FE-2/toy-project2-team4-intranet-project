import { Outlet, useLocation } from 'react-router-dom';

import * as S from './Layout.styles';
import Header from '@/components/header/Header';
import NavBar from '@/components/ui/navigation';
import { ROUTER_PATH } from '@/constants/constant';

const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === ROUTER_PATH.LOGIN;
  const isProfilePage = location.pathname === ROUTER_PATH.PROFILE;
  return (
    <S.Container>
      {!isLoginPage && !isProfilePage && <Header />}
      <Outlet />
      {!isLoginPage && <NavBar />}
    </S.Container>
  );
};

export default Layout;
