import AddsProps from "@/app/interface/adds/IAdds";
import Image from "next/image";

const Adds = ({ heading, text }: AddsProps) => {
  return (
    <div className="flex flex-col gap-2 border-none bg-[#B782ED] text-left w-[405px] mt-10 ml-8 mr-8 pt-[18px] pl-[10px]">
      <Image
        src={"/assets/logo-add.png"}
        width={122}
        height={21}
        alt="Logo de la Empresa."
      />
      <h1 className="text-3xl text-[#520138] font-bold">{heading}</h1>
      <p className="text-sm text-[#520138]">{text}</p>
      <Image
        className="ml-12"
        src={"/assets/add-image.png"}
        width={200}
        height={200}
        alt="Imagen descriptiva entre la conexión de empleados y empleadores."
      />
    </div>
  );
};

export default Adds;
