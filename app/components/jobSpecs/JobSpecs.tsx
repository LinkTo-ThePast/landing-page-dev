import Image from "next/image";

const JobSpecs = () => {
  return (
    <div className="grid grid-cols-4 font-normal text-center p-12 mt-10">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={"/assets/tier/casa.png"}
          alt="Trabaja desde tu casa."
          width={24}
          height={24}
        />
        <figcaption className="text-sm text-[#FFF1EB]">Desde casa.</figcaption>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image
          src={"/assets/tier/reloj.png"}
          alt="Empleos de medio tiempo."
          width={24}
          height={24}
        />
        <figcaption className="text-sm text-[#FFF1EB]">
          Medio tiempo.
        </figcaption>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image
          src={"/assets/tier/rapido.png"}
          alt="Contratación inmediata."
          width={24}
          height={24}
        />
        <figcaption className="text-sm text-[#FFF1EB]">
          Contratación inmediata.
        </figcaption>
      </div>
      <div className="flex flex-col items-center gap-2">
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
