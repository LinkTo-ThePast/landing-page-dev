import Adds from "./components/add/Ads";
import Card from "./components/card/Card";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import JobSpecs from "./components/jobSpecs/JobSpecs";

const Home = () => {
  return (
    <div
      className="flex flex-col h-screen w-screen m-0 bg-gradient-to-br from-primary to-secondary "
      id="main-div"
    >
      <div id="header-div">
        <Header />
        <div className="text-center text-5xl font-bold mt-7 text-[#FBB89C]">
          Encuentra el trabajo que quieres
        </div>
        <JobSpecs />
      </div>

      <div className="flex-grow flex flex-row justify-between place-items-center">
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
