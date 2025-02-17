import Image from "next/image";
import Button from "../buttons/Button";

const Header = () => {
  return (
    <header className="flex flex-row md:justify-between justify-start sm:pt-6 sm:px-6 md:w-full sm:flex-row sm:w-fit">
      <Image
        src={"/assets/logo.png"}
        width={135}
        height={36}
        quality={85}
        alt="Empleo digno para todos."
      />
      <div className="flex flex-row ml-7 gap-4 md:gap-6 md:place-content-end">
        <Button text="Registrarse" variant="primary" />
        <Button text="Inicia sesion" variant="primary" />
      </div>
    </header>
  );
};

export default Header;
