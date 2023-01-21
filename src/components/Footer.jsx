import heart from '../images/heart.svg';
const Footer = () => {
  return (
    <span className="footer">
      Made With
      <img src={heart} style={{ width: '20px', margin: '0 10px' }} />
      By Aws Maarouf
    </span>
  );
};

export default Footer;
