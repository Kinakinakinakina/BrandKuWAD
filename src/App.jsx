import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {

  return (
    <>
      <Header />
      <main>
        <Outlet /> 
        {/* <About />
        <Pricing /> */}
      </main>
      <Footer />
    </>
  );
};

export default App;
