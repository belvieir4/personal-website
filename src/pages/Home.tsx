import Hero from 'components/Hero';
import Highlight from 'components/Highlight';
import ThumbEbanx from 'pages/projects/ebanx/imgs/thumb-ebanx.jpg';

const Home = () => {
  return (
    <>
      <Hero
        title="Hi, I'm Isabel Vieira"
        subtitle="A Product Designer and Front-end Developer based in Canada"
      />

      {/* Project Main Grid */}
      <div className="flex w-full flex-col items-center">
        <h2 className="mb-10 text-center text-4xl font-bold text-white">
          Highlighted Projects
        </h2>
        <div className="flex w-full flex-col items-center gap-16">
          <Highlight
            img={ThumbEbanx}
            title="Automated Refund Status Flow"
            subtitle="A case on how we can improve the user's experience on a Help Center automating the access to information."
            to="/project/ebanx"
            tags={['Product Design', 'Responsive Website']}
          />
          <Highlight
            img="https://picsum.photos/1400/800"
            title="Test"
            subtitle="Test"
            to="/project/02"
            tags={['Product Design', 'Mobile App']}
            reverse
          />
          <div className="h-20 bg-blue-700">proj 3</div>
        </div>
      </div>
    </>
  );
};

export default Home;
