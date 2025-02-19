import Footer from "../footer/footer";
import Header from "../header/header";

const Privacy = () => {
  return (
    <div className="flex flex-col md:h-screen md:w-screen w-screen h-screen m-0 bg-gradient-to-br from-primary to-secondary">
      <Header />
      <div
        id="iframe-privacy"
        className="flex flex-grow w-2/3 items-center self-center"
      >
        <iframe
          src="/landing-page-dev/docs/Aviso de Privacidad.pdf"
          style={{ width: "100%", height: "500px" }}
          frameBorder="0"
          allowFullScreen
          title="Políticas de privacidad."
        />
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
