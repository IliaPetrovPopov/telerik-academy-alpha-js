import withPrettyButtons from '../../hoc/withPrettyButtons';

const Footer = () => {
  const handleClick = () => {
    alert(`We'll be with you shortly`);
  }
  return <button onClick={handleClick}>Contact us</button>;
};

export default withPrettyButtons(Footer);
