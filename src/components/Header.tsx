'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faMedium,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ScrollProgressBar from './ScrollProgressBar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { title as ebanx } from '@/app/projects/ebanx/page';
import { title as catho } from '@/app/projects/catho/page';

function Header() {
  const pathname = usePathname();

  const titles: Record<string, string> = {
    '/projects/ebanx': ebanx,
    '/projects/catho': catho,
  };

  const title = titles[pathname];

  return (
    <div className="fixed left-0 top-0 z-20 w-full">
      <div className="flex w-full flex-col flex-wrap items-center justify-between gap-4 border-b border-b-gray-700 bg-gray-950 px-6 py-4 xs:h-16 xs:flex-row xs:gap-0 xl:px-12">
        <div>
          <Link
            href="/"
            className="text-base font-bold text-white hover:text-teal-400"
          >
            Isabel Vieira
          </Link>
          {title && (
            <span className="hidden text-base text-white  lg:inline">
              {' '}
              / {title}
            </span>
          )}
        </div>
        <div className="flex items-center gap-4 xs:ml-6">
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
      {pathname.includes('project') && <ScrollProgressBar />}
    </div>
  );
}

export default Header;
