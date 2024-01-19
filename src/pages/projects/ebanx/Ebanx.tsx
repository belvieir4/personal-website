import Hero from 'components/Hero';
import Callout from 'components/Callout';
import CalloutList from 'components/CalloutList';

const Ebanx = () => {
  return (
    <>
      <Hero
        tags={['Product Design', 'Responsive Website']}
        title="Automated Refund Status Flow"
        subtitle="A case on how we can improve the user's experience on a Help Center automating the access to information."
      />
      <Callout title="Batata" text="Um textão explicando batata" />
      <CalloutList
        title="Batata"
        content={[
          'Um texto com bullets sobre batata',
          'Um texto com bullets sobre batata',
          'Um texto com bullets sobre batata',
        ]}
      />
    </>
  );
};

export default Ebanx;
