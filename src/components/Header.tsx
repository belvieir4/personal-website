import Github from 'assets/images/github.svg?react';
import Medium from 'assets/images/medium.svg?react';
import Linkedin from 'assets/images/linkedin.svg?react';
import Mail from 'assets/images/mail.svg?react';

function Header() {
  return (
    <div className="flex w-full flex-wrap space-x-12 border-b border-b-gray-700 bg-gray-950 px-20 py-4	">
      <div className="flex-1">
        <span className="text-base font-bold leading-5 text-white">
          Isabel Vieira
        </span>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/isabelcvieira/"
          target="_blank"
          className="block text-white hover:text-cyan-400"
        >
          <Linkedin width="20" />
        </a>
        <a
          href="https://medium.com/@isabelvieira"
          target="_blank"
          className="block text-white hover:text-cyan-400"
        >
          <Medium width="20" />
        </a>
        <a
          href="https://github.com/belvieir4"
          target="_blank"
          className="block text-white hover:text-cyan-400"
        >
          <Github width="20" />
        </a>
        <a
          href="mailto:work.isabelvieira@gmail.com"
          target="_blank"
          className="block text-white hover:text-cyan-400"
        >
          <Mail width="20" />
        </a>
      </div>
    </div>
  );
}

export default Header;
