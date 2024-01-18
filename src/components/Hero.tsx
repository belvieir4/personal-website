import Tag from './Tag';

export type HeroProps = {
  title: string;
  subtitle: string;
  tags?: string[];
};

const Hero = ({ title, subtitle, tags }: HeroProps) => {
  return (
    <div className="flex w-full flex-col items-center px-6 pb-14 pt-20 lg:px-20 lg:pb-20 lg:pt-32">
      <div className="mb-10 flex gap-3">
        {tags?.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
      </div>
      <h1 className="text-center text-4xl font-bold text-white lg:text-6xl">
        {title}
      </h1>
      <p className=" mt-2 text-center font-light text-white  lg:text-xl">
        {subtitle}
      </p>
      <hr className="mt-14 w-40 rounded-sm border-2 border-teal-400 lg:mt-20" />
    </div>
  );
};

export default Hero;
