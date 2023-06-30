import { Outlet } from 'react-router-dom';
import Layout from '~/components/ui/layouts/home/index';

function Index() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default Index;
