import { Home, User, Code, Briefcase, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { href: '#Home', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: User },
    { href: '#skills', label: 'Skills', icon: Code },
    { href: '#projects', label: 'Projects', icon: Briefcase },
    { href: '#contact', label: 'Contact Me', icon: Mail },
  ];
  return (
    <footer id="footer">
      <div className="flex justify-between items-start w-full flex-wrap px-10 md:px-20 lg:px-25 text-lg gap-10">
        <section>
          <h2 className="text-xl">
            <span className="text-gradient drop-shadow-[0_0_8px_rgba(37,99,235,0.8)] transition-all duration-300">
              Rajesh's
            </span>{' '}
            Portfolio
          </h2>
          <p>
            Thank you for visiting my personal portfolio website. Connect with
            me
          </p>
        </section>
        <section>
          <h2 className="font-bold text-xl">Quick Links</h2>
          <ul className="flex items-start gap-1 flex-col">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.href} className="w-full">
                  <a
                    href={link.href}
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <h2 className="font-bold text-xl">Contact info</h2>
          <p>
            <Phone className="w-4 h-4 text-blue-400" />
            +91 8148093774
          </p>
          <p>
            <Mail className="w-4 h-4 text-blue-400" />
            iamrajesh65892004@gmail.com
          </p>
          <p>
            <MapPin className="w-4 h-4 text-blue-400" />
            Tamilnadu,India - 607301
          </p>
        </section>
      </div>
      <div className="border-t border-gray-300 pt-6 text-center w-full px-10 md:px-20 lg:px-25 flex-center mb-3">
        <p className="text-gray-400 text-base drop-shadow-[0_0_8px_rgba(37,99,235,0.8)] transition-all duration-300">
          Designed by{' '}
          <span className="text-blue-400 font-semibold">Rajesh</span> with 💘
        </p>
      </div>
    </footer>
  );
};
export default Footer;
