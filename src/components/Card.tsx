import Link from './Link';
import { LinkProps } from '@tanstack/react-router';
import Tag from './Tag';

export type Links =
  | {
      text: string;
      to: LinkProps['to'];
    }
  | {
      text: string;
      href: string;
    };

export type CardProps = {
  title: string;
  img: string;
  links: Links[];
  tags: string[];
};

const Card = ({ title, img, links, tags }: CardProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img className="h-60 w-full rounded-lg object-cover" src={img} />
      <div className="mt-6 flex w-full flex-col">
        <div className="mb-4 flex gap-3">
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
        <h4 className="text-2xl font-bold text-white">{title}</h4>
        <div className="mt-6 flex gap-8">
          {links.map(({ text, ...props }) => (
            <Link {...props} small>
              {text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
