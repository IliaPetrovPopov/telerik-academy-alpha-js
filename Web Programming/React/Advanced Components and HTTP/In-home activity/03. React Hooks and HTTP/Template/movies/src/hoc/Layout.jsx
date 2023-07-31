import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Layout = props => {
  return (
    <>
      <Header />
      <hr />
      <main>{props.children}</main>
      <hr />
      <Footer />
    </>
  );
};

export default Layout;
