import Image from "next/image";
import Button from "../buttons/Button";

const Card = () => {
  return (
    <div className="flex flex-col justify-center items-center md:items-center md:gap-4 rounded-3xl">
      <h1 className="md:text-4xl text-3xl text-white mt-6">
        Comienza tu historia de éxito
      </h1>
      <h2 className="md:text-3xl text-2xl text-white md:mb-0 mb-4">
        Regístrate y crea tu CV gratis
      </h2>
      <Image
        className="mb-5"
        src={"/landing-page-dev/assets/cv.png"}
        width={200}
        height={200}
        alt="Crea tu CV con nosotros e inicia tu historia de éxito."
      />
      <Button text="Crear CV gratis" variant="primary" onClick={() => {}} />
    </div>
  );
};

export default Card;
