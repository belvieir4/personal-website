import Hero from 'components/Hero';
import Highlight from 'components/Highlight';
import ThumbEbanx from 'pages/projects/ebanx/imgs/thumb-ebanx.jpg';
import Card from 'components/Card';
import ThumbDigimonList from 'pages/projects/frontprojects/imgs/thumb-digimonlist.jpg';
import ThumbPersonalWebsite from 'pages/projects/frontprojects/imgs/thumb-personalwebsite.jpg';
import ThumbSimpleLogin from 'pages/projects/frontprojects/imgs/thumb-simplelogin.jpg';
import PersonalPhoto from 'assets/personal-photo.png';

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
        <div className="flex w-full flex-col items-center gap-x-3 gap-y-12 md:grid md:w-auto md:grid-cols-[repeat(2,_auto)] md:items-start md:gap-16 lg:flex">
          <Highlight
            img={ThumbEbanx}
            title="Automated Refund Status Flow"
            subtitle="A case on how we can improve the user's experience on a Help Center automating the access to information."
            to="/project/ebanx"
            tags={['Product Design', 'Responsive Website']}
            className="md:w-auto"
          />
          <Highlight
            img="https://picsum.photos/1400/800"
            title="Test"
            subtitle="Test"
            to="/project/ebanx"
            tags={['Product Design', 'Mobile App']}
            reverse
            className="md:w-auto"
          />
          <Highlight
            img="https://picsum.photos/1400/800"
            title="Test"
            subtitle="Test"
            to="/project/ebanx"
            tags={['Product Design', 'Mobile App']}
            className="md:w-auto"
          />
        </div>
      </div>

      {/* Project Secondary Grid */}
      <div className="mt-20 flex w-full flex-col items-center xl:mt-32">
        <h2 className="mb-10 text-center text-4xl font-bold text-white">
          Other Projects
        </h2>
        <div className="mt-10 grid w-full grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-6">
          <Card
            title="Personal Website"
            img={ThumbPersonalWebsite}
            links={[
              {
                text: 'View on Github',
                href: 'https://github.com/belvieir4/personal-website',
              },
            ]}
            tags={['Front-end Development']}
          />
          <Card
            title="The Digimon List"
            img={ThumbDigimonList}
            links={[
              {
                text: 'Live preview',
                href: 'https://belvieir4.github.io/digimon-table/',
              },
              {
                text: 'View on Github',
                href: 'https://github.com/belvieir4/digimon-table',
              },
            ]}
            tags={['Front-end Development']}
          />
          <Card
            title="Simple Login"
            img={ThumbSimpleLogin}
            links={[
              {
                text: 'Live Preview',
                href: 'https://belvieir4.github.io/login/',
              },
              {
                text: 'View on Github',
                href: 'https://github.com/belvieir4/login',
              },
            ]}
            tags={['Front-end Development']}
          />
        </div>
      </div>

      {/* About me section */}
      <div className="flex w-full flex-col items-center px-4">
        <hr className="mb-20 mt-20 w-40 rounded-sm border-2 border-teal-400 lg:mt-32" />
        <img
          src={PersonalPhoto}
          alt="Photo in black and white of Isabel Vieira"
        />
        <div className="mb-20 mt-8 flex max-w-[560px] flex-col items-center">
          <h3 className="text-3xl font-bold text-white">About me</h3>
          <p className="mt-8 text-center leading-7 text-white">
            I have more than 10 years of experience with technology, working
            with web and mobile applications for B2B and B2C companies,
            including fintechs, HR systems, banks and gaming.
          </p>
          <p className="mt-6 text-center leading-7 text-white">
            You can{' '}
            <a
              href="https://www.linkedin.com/in/isabelcvieira/"
              target="_blank"
              className="text-teal-400 hover:underline hover:underline-offset-4"
            >
              reach me on LinkedIn
            </a>{' '}
            or{' '}
            <a
              href="mailto:work.isabelvieira@gmail.com"
              target="_blank"
              className="text-teal-400 hover:underline hover:underline-offset-4"
            >
              send me an e-mail
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
