import Image from "next/image";

const AddOne = () => {
  return (
    <div className="flex flex-col gap-2 border-none bg-[#B782ED] text-left w-min ">
      <Image
        src={"/assets/logo-add.png"}
        width={122}
        height={21}
        alt="Logo de la Empresa."
      />
      <h1 className="text-3xl text-[#520138] font-bold">
        Conecta con las mejores empresas
      </h1>
      <p className="text-sm text-[#520138]">
        Accede a vacantes en las empresas líderes de México y encuentra el
        trabajo que siempre has querido.
      </p>
      <Image
        src={"/assets/add-image.png"}
        width={100}
        height={100}
        alt="Imagen descriptiva entre la conexión de empleados y empleadores."
      />
    </div>
  );
};

export default AddOne;
