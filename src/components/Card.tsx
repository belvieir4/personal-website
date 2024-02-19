import Link from './Link';
import { LinkProps } from '@/components/Link';
import Image from 'next/image';
import Tag from './Tag';
import { StaticImageData } from 'next/image';

export type CardProps = {
  title: string;
  img: StaticImageData;
  links: LinkProps[];
  tags: string[];
};

const Card = ({ title, img, links, tags }: CardProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image alt="" className="h-60 w-full rounded-lg object-cover" src={img} />
      <div className="mt-6 flex w-full flex-col">
        <div className="mb-4 flex gap-3">
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
        <h4 className="text-2xl font-bold text-white">{title}</h4>
        <div className="mt-6 flex gap-8">
          {links.map((props, index) => (
            <Link key={index} {...props} small />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
