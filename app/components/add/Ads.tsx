import AddsProps from "@/app/interface/adds/IAdds";
import Image from "next/image";

const Adds = ({
  heading,
  text,
  imageURL = "adOne",
  propImage = "default",
}: AddsProps) => {
  const images = {
    adOne: "/landing-page-dev/assets/adOne.png",
    adTwo: "/landing-page-dev/assets/frida.png",
  };

  const propsImages = {
    primary: {
      width: 110,
      height: 110,
    },
    assistant: {
      width: 100,
      height: 100,
    },
    default: {
      width: 80,
      height: 80,
    },
    // borde rodeando: se ve menos 'agresivo'
    // usar rem en lugar de pixeles (formula de escalamiento)
  };

  return (
    <div className="relative flex flex-col gap-3 rounded-lg  bg-[#B782ED] text-left w-[405px] mt-10 ml-8 mr-8 pt-[24px] px-[15px] h-[350px]">
      <Image
        src={"/landing-page-dev/assets/logo-add.png"}
        width={propsImages[propImage].width}
        height={propsImages[propImage].height}
        alt="Logo de la Empresa."
      />
      <h1 className="text-2xl text-[#520138] font-bold">{heading}</h1>
      <p className="text-[#520138] text-base">{text}</p>
      <Image
        className="object-contain place-self-center"
        src={images[imageURL]}
        width={propsImages[propImage].width}
        height={propsImages[propImage].height}
        alt="Nuestra misión es que encuentres el trabajo de tus sueños."
      />
    </div>
  );
};

export default Adds;
