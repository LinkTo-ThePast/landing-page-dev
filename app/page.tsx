import Card from "./components/card/Card";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import JobSpecs from "./components/jobSpecs/JobSpecs";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="text-center text-5xl font-bold mt-7 text-[#FBB89C]">
        Encuentra el trabajo que quieras
      </div>
      <JobSpecs />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
