import Image from "next/image";

const JobSpecs = () => {
  return (
    <div className="flex flex-row gap-4 font-normal justify-evenly p-12 mt-10">
      <Image
        src={"/assets/tier/casa.png"}
        alt="Trabaja desde tu casa."
        width={24}
        height={24}
      />
      <figcaption className="text-sm">Desde casa.</figcaption>
      <Image
        src={"/assets/tier/reloj.png"}
        alt="Empleos de medio tiempo."
        width={24}
        height={24}
      />
      <figcaption className="text-sm">Medio tiempo.</figcaption>
      <Image
        src={"/assets/tier/rapido.png"}
        alt="Contratación inmediata."
        width={24}
        height={24}
      />
      <figcaption className="text-sm">Contratación inmediata.</figcaption>
      <Image
        src={"/assets/tier/ubi.png"}
        alt="Busca la ubicación que más te convenga."
        width={24}
        height={24}
      />
      <figcaption className="text-sm">Ubicación.</figcaption>
    </div>
  );
};

export default JobSpecs;
