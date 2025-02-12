import Image from "next/image";

const Card = () => {
  return (
    <div className="flex flex-col">
      <h1>Comienza tu historia de éxito</h1>
      <h2>Regístrate y crea tu CV gratis</h2>
      <Image
        src={"/assets/cv.png"}
        width={200}
        height={200}
        alt="Crea tu CV con nosotros e inicia tu historia de éxito."
      />
      <button className="w-[60px] h-[24px] rounded-[24px] py-12 px-16 bg-[#272627]">
        Crear CV gratis.
      </button>
    </div>
  );
};

export default Card;
