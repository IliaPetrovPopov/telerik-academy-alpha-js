import Layout from "./hoc/Layout";
import Movies from "./components/Movies/Movies";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import IndividualMovie from "./components/Movies/IndividualMovie";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <div>
      <IndividualMovie />
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />}/>
            <Route path="/movies" element={<Movies />}/>
            <Route path="/movies/:id" element={<IndividualMovie />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
    </div>
  );
};

export default App;
