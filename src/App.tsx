import Header from './components/Header';
import Hero from 'components/Hero';

function App() {
  return (
    <>
      <Header />
      <Hero
        title="Hi, I'm Isabel Vieira"
        subtitle="A Product Designer and Front-end Developer based in Canada"
      />

      {/* Project Main Grid */}
      <div>
        <h2>Highlighted Projects</h2>
      </div>
    </>
  );
}

export default App;
