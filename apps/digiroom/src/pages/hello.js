import Layout from 'ui/components/templates/Layout';
import Carousel from 'ui/components/atoms/Carousel';

const Hello = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">My Carousel</h1>
      <Carousel />
    </Layout>
  );
};

export default Hello;
