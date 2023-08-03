import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./hoc/Layout";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Movies from "./components/Movies/Movies";
import IndividualMovie from "./components/Movies/IndividualMovie";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<IndividualMovie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
