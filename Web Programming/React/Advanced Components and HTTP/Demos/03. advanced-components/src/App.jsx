import Layout from './layout/Layout';
import withStyling from './layout/withStyling';
import Content from './components/Content';

const App = () => {
  return (
    <Layout>
      <h3>Composition Rocks!</h3>
      <Content quote='In React using Composition and Props gives you all the flexibility that you would need.'/>
    </Layout>
  );
};

export default withStyling(App);