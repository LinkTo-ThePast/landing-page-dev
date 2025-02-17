import Image from "next/image";

const JobSpecs = () => {
  return (
    <div className="md:grid md:grid-cols-4 grid grid-cols-2 gap-4 text-center font-bold items-center p-12 mt-5">
      <div className="flex flex-col items-center gap-2 transiton duration-500 hover:scale-150 hover:font-extrabold">
        <Image
          src={"/landing-page-dev/assets/tier/casa.png"}
          alt="Trabaja desde tu casa."
          width={24}
          height={24}
        />
        <figcaption className="text-sm text-[#FFF1EB]">Desde casa.</figcaption>
      </div>
      <div className="flex flex-col items-center gap-2 transiton duration-500 hover:scale-150 hover:font-extrabold">
        <Image
          src={"/landing-page-dev/assets/tier/reloj.png"}
          alt="Empleos de medio tiempo."
          width={24}
          height={24}
        />
        <figcaption className="text-sm text-[#FFF1EB]">
          Medio tiempo.
        </figcaption>
      </div>
      <div className="flex flex-col items-center gap-2 transiton duration-500 hover:scale-150 hover:font-extrabold">
        <Image
          src={"/assets/tier/rapido.png"}
          alt="Contratación inmediata."
          width={22}
          height={22}
        />
        <figcaption className="text-sm text-[#FFF1EB]">
          Contratación inmediata.
        </figcaption>
      </div>
      <div className="flex flex-col items-center gap-2 transiton duration-500 hover:scale-120 hover:font-extrabold">
        <Image
          src={"/assets/tier/ubi.png"}
          alt="Busca la ubicación que más te convenga."
          width={24}
          height={24}
        />
        <figcaption className="text-sm text-[#FFF1EB]">Ubicación.</figcaption>
      </div>
    </div>
  );
};

export default JobSpecs;
