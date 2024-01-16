import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faMedium,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link, useMatches } from '@tanstack/react-router';

function Header() {
  const matches = useMatches();
  const currentRoute = [...matches].pop();

  return (
    <div className="fixed left-0 top-0 flex h-16 w-full flex-wrap items-center justify-between space-x-12 border-b border-b-gray-700 bg-gray-950 px-6 xl:px-20">
      <div>
        <Link to="/" className="text-base font-bold text-white">
          Isabel Vieira
        </Link>
        {currentRoute?.context.title && (
          <span className="hidden text-base text-white lg:inline">
            {' '}
            / {currentRoute?.context.title}
          </span>
        )}
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/isabelcvieira/"
          target="_blank"
          className="block text-white hover:text-cyan-400"
        >
          <FontAwesomeIcon size="lg" icon={faLinkedinIn} />
        </a>
        <a
          href="https://medium.com/@isabelvieira"
          target="_blank"
          className="block text-white hover:text-cyan-400"
        >
          <FontAwesomeIcon size="lg" icon={faMedium} />
        </a>
        <a
          href="https://github.com/belvieir4"
          target="_blank"
          className="block text-white hover:text-cyan-400"
        >
          <FontAwesomeIcon size="lg" icon={faGithub} />
        </a>
        <a
          href="mailto:work.isabelvieira@gmail.com"
          target="_blank"
          className="block text-white hover:text-cyan-400"
        >
          <FontAwesomeIcon size="lg" icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
}

export default Header;
