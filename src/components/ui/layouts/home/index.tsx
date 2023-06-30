import Main from './main';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Main header={<Header />} footer={<Footer />}>
      {children}
    </Main>
  );
};

export default Layout;
