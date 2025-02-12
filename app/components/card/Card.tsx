import Image from "next/image";

const Card = () => {
  return (
    <div className="flex flex-col items-center gap-4 bg-white rounded-3xl">
      <h1 className="text-4xl text-[#D50793] mt-6">
        Comienza tu historia de éxito
      </h1>
      <h2 className="text-3xl text-[#610FB2]">
        Regístrate y crea tu CV gratis
      </h2>
      <Image
        src={"/assets/cv.png"}
        width={200}
        height={200}
        alt="Crea tu CV con nosotros e inicia tu historia de éxito."
      />
      <button className="w-[170px] h-[24px] rounded-[24px] bg-primary text-center  text-[#fffdf7] px-18 py-[28px] inline-block align-middle">
        Crear CV gratis.
      </button>
    </div>
  );
};

export default Card;
