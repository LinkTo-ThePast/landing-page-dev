import Adds from "./components/add/Ads";
import Card from "./components/card/Card";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import JobSpecs from "./components/jobSpecs/JobSpecs";

const Home = () => {
  return (
    <div
      className="flex flex-col md:h-screen md:w-screen w-fit h-fit m-0 bg-gradient-to-br from-primary to-secondary "
      id="main-div"
    >
      <div id="header-div">
        <Header />
        <div className="text-center md:text-6xl text-5xl font-bold md:mt-7 mt-10 text-[#FBB89C]">
          Encuentra el trabajo <br /> que quieres.
        </div>
        <JobSpecs />
      </div>

      <div className="md:flex-grow md:flex md:flex-row flex flex-col justify-center md:justify-between md:place-items-center md:mt-0 ">
        <Adds
          heading="Conecta con las mejores empresas"
          text="Accede a vacantes en las empresas líderes de México y encuentra el trabajo que siempre has querido."
          imageURL="adOne"
          propImage="primary"
        />
        <Card />
        <Adds
          heading="Recibe acompañamiento personalizado"
          text="Frida, nuestra asistente virtual, te guiará paso a paso en el proceso y te ayudará a prepararte para destacar."
          imageURL="adTwo"
          propImage="assistant"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
