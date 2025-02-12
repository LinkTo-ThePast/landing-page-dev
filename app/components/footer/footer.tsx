import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-row min-w-max place-content-end">
      <Image
        className="mr-8"
        src={"/assets/frida.png"}
        width={80}
        height={80}
        alt="Nuestra agente virtual: Frida. ¡Ella te acompañará a lo largo de tu viaje!"
      />
    </footer>
  );
};

export default Footer;
