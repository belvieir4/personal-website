import classNames from 'classnames';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from '@tanstack/react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { RefAttributes } from 'react';
import { motion } from 'framer-motion';

export type LinkProps = RouterLinkProps & {
  small?: boolean;
  children: string;
};

function Link({
  small,
  children,
  href,
  to,
  ...props
}: LinkProps & RefAttributes<HTMLAnchorElement> & { small?: boolean }) {
  return (
    <RouterLink to={to || href} {...props}>
      <motion.div
        className={classNames(
          'flex cursor-pointer items-center border-b border-b-teal-400 font-light text-teal-400 transition duration-300 ease-in-out hover:border-b-teal-400	 lg:border-b-transparent',
          {
            'text-xl': !small,
          },
        )}
        whileHover="hover"
      >
        {children}
        <motion.div
          variants={{
            hover: {
              x: 5,
              transition: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 0.8,
              },
            },
          }}
        >
          <FontAwesomeIcon
            size="sm"
            className="ml-2 block"
            icon={faArrowRight}
          />
        </motion.div>
      </motion.div>
    </RouterLink>
  );
}

export default Link;
