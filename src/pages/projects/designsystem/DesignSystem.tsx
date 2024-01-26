import BackLink from 'components/BackLink';
import Hero from 'components/Hero';

const DesignSystem = () => {
  return (
    <>
      <Hero
        tags={['Product Design', 'Design System']}
        title="A Design System for Financial"
        subtitle="This design system was developed specifically to meet the needs of a B2B and B2C financial product."
      />

      <BackLink />
    </>
  );
};

export default DesignSystem;
