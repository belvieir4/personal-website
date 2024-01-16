export type HeroProps = {
  title: string;
  subtitle: string;
};

const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <div className="flex w-full flex-col items-center px-20 pb-20 pt-32">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="mb-20 mt-2 text-xl font-light text-white">{subtitle}</p>
      <hr className="w-40 rounded-sm border-2 border-cyan-400" />
    </div>
  );
};

export default Hero;
