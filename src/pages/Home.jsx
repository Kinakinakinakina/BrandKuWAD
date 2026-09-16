import Hero from "../components/hero"

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">
        <Hero/>
      </h1>
    </section>
  );
};

export default Home;