import Layout from "./hoc/Layout";
import Movies from "./components/Movies/Movies";

const App = () => {
  return (
    <div>
      <Layout>
        <Movies />
      </Layout>
    </div>
  );
};

export default App;
