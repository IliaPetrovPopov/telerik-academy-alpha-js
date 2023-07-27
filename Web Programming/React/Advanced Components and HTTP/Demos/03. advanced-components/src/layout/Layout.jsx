import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = props => {
  return (
    <div>
      <Header />
      <hr />

      {props.children}

      <hr />
      <Footer />
    </div>
  );
};

export default Layout;
