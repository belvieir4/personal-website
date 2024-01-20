import classNames from 'classnames';
import Link from './Link';
import { LinkProps } from '@tanstack/react-router';
import Tag from './Tag';

export type HighlightProps = {
  title: string;
  subtitle: string;
  img: string;
  reverse?: boolean;
  to: LinkProps['to'];
  tags: string[];
  className?: string;
};

const Highlight = ({
  title,
  subtitle,
  img,
  reverse,
  to,
  tags,
  className,
}: HighlightProps) => {
  return (
    <div
      className={classNames(
        'flex w-full flex-col items-center justify-center gap-14 lg:flex-row lg:justify-stretch',
        {
          'lg:flex-row-reverse': reverse,
        },
        className,
      )}
    >
      <img
        className="h-72 w-full rounded-2xl object-cover md:h-52 md:w-[328px] lg:h-[320px] lg:w-[520px] xl:h-[400px] xl:w-[624px]"
        src={img}
      />
      <div className="flex w-full flex-col items-start md:w-[328px] lg:w-[624px]">
        <div className="mb-6 flex gap-3">
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
        <h3 className="text-3xl font-bold text-white">{title}</h3>
        <p className="mb-10 mt-4 text-base font-light leading-7 text-white">
          {subtitle}
        </p>
        <Link to={to}>View case</Link>
      </div>
    </div>
  );
};

export default Highlight;
