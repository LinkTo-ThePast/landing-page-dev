import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex w-full justify-center items-end font-bold">
      <div className="flex flex-row">
        <ul className="flex flex-row justify-center place-content-center gap-9">
          <Link href={"/"}>Nosotros</Link>
          <Link href={"/"}>Recursos adicionales</Link>
        </ul>
      </div>
      <Image
        className=" relative ml-15 "
        src={"/assets/frida.png"}
        width={80}
        height={80}
        alt="Nuestra agente virtual: Frida. ¡Ella te acompañará a lo largo de tu viaje!"
      />
    </footer>
  );
};

export default Footer;
