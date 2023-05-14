import { Outlet } from 'react-router-dom';
import Layout from '~/components/ui/layouts';

function Index() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default Index;
