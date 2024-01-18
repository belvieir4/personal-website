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
    <div className="xs:gap-0 xs:flex-row xs:h-16 fixed left-0 top-0 flex w-full flex-col flex-wrap items-center justify-between gap-4 border-b border-b-gray-700 bg-gray-950 px-6 py-4 xl:px-12">
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
      <div className="xs:ml-6 flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/isabelcvieira/"
          target="_blank"
          className="block text-white hover:text-teal-400"
        >
          <FontAwesomeIcon size="lg" icon={faLinkedinIn} />
        </a>
        <a
          href="https://medium.com/@isabelvieira"
          target="_blank"
          className="block text-white hover:text-teal-400"
        >
          <FontAwesomeIcon size="lg" icon={faMedium} />
        </a>
        <a
          href="https://github.com/belvieir4"
          target="_blank"
          className="block text-white hover:text-teal-400"
        >
          <FontAwesomeIcon size="lg" icon={faGithub} />
        </a>
        <a
          href="mailto:work.isabelvieira@gmail.com"
          target="_blank"
          className="block text-white hover:text-teal-400"
        >
          <FontAwesomeIcon size="lg" icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
}

export default Header;
