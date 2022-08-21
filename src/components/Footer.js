import { FaGithub } from 'react-icons/fa';
import '../styles/Footer.css';
const Footer = () => {
  return (
    <footer id="footer" className= "d-flex align-item-center bg-dark">
      <p className="mb-0">Copyright © 2022 shino022</p>
      <a id="github-link" href="https://github.com/shino022/Shop"><FaGithub /></a>
    </footer>
  );
}

export default Footer;