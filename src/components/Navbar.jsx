import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav id="navbar">
      <a href="/">
        <img src="/logo.svg" alt="Logo" />
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
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#contact-me">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
