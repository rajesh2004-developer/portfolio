import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav id="navbar">
      <a href="/">
        <img src={Logo} alt="Logo" />
        <span>ajesh</span>
      </a>
      <div className="menu" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </div>
      <ul className={isOpen ? 'flex' : ''}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
