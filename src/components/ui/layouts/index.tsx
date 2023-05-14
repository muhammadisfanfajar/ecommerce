import Main from './main';
import Header from './header';
import Footer from './footer';
import Menu from './menu';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Main header={<Header />} footer={<Footer />} menu={<Menu />}>
      {children}
    </Main>
  );
};

export default Layout;
