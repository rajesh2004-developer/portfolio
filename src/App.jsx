import Background from './components/Background';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
};
export default App;
