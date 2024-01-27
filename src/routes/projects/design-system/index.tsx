import { createFileRoute } from '@tanstack/react-router';
import BackLink from 'components/BackLink';
import Callout from 'components/Callout';
import Hero from 'components/Hero';
import TextBlock from 'components/TextBlock';
import ImgIntroDs from 'routes/projects/design-system/imgs/intro-img.jpg';

export const Route = createFileRoute('/projects/design-system/')({
  component: DesignSystem,
  beforeLoad: () => ({
    title: 'A Design System for Financial',
  }),
});

function DesignSystem() {
  return (
    <>
      <Hero
        tags={['Product Design', 'Design System']}
        title="A Design System for Financial"
        subtitle="The process of building a design system to meet the needs of a B2B and B2C financial product."
      />

      {/* Important Section */}
      <div className="mb-20 flex w-full flex-col items-center gap-8 xl:mb-32">
        <Callout
          title="Important"
          text="For compliance reasons, the company's name was hidden in this project."
        />
      </div>

      {/* Intro Section */}
      <div className=" mb-20 flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:items-start xl:mb-32 xl:gap-14">
        <img
          src={ImgIntroDs}
          alt="Image of three whiteboards with information of border radius, elevation, typography and colors"
          className="w-[320px] rounded-2xl object-cover md:w-[420px] xl:w-[520px]"
        />
        <div className="flex w-full max-w-[560px] flex-col items-start">
          <TextBlock
            title="Introduction"
            paragraphs={[
              'Catho is a company that provides HR services throughout Brazil, having a B2B recruitment management web system, and a job board for B2C users available as an website and native mobile apps for iOS and Android.',
              'I was the only the designer responsible for both of the apps, iOS and Android, having the objective of delivering the B2C user a seamless experience for job hunting and application through their phones.',
            ]}
          />
          <div className="mt-8 grid w-full gap-4 md:grid-cols-2">
            <Callout
              title="Team"
              text="Product Designer/Design System Ops (me), Director of Design, CTO, and a Full-stack Developer"
              className="md:col-span-2"
            />
            <Callout
              title="Tools and Technology used"
              text="Figma, Storybook, HTML, CSS, React.js, Typescript, MUI"
              className="md:col-span-2"
            />
          </div>
        </div>
      </div>

      <BackLink />
    </>
  );
}
