import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';

const Layout = props => {
  return (
    <>
      <Header />
      <Navigation />
      <hr />
      <main>{props.children}</main>
      <hr />
      <Footer />
    </>
  );
};

export default Layout;
