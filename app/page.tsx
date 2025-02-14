import Card from "./components/card/Card";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import JobSpecs from "./components/jobSpecs/JobSpecs";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/*implement section with gradient according to design*/}
      <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-br from-primary to-secondary"></div>

      <div className="relative z-10 mb-10">
        <Header />
        <div className="text-center text-5xl font-bold mt-7 text-[#FBB89C]">
          Encuentra el trabajo que quieras
        </div>
        <JobSpecs />
      </div>

      <div className="relative z-50 bg-[#fffdf7]">
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
