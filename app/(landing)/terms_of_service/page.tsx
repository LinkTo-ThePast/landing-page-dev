import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";
import Terms from "@/app/components/terms_of_service/Terms";

const Home = () => {
  return (
    <div className="flex flex-col md:h-full md:w-full w-fit h-fit m-0 bg-gradient-to-br from-primary to-secondary">
      <Header />
      <Terms />
      <Footer />
    </div>
  );
};

export default Home;
