import Image from "next/image";
import Button from "../buttons/Button";

const Header = () => {
  return (
    <header className="flex flex-row md:justify-between justify-evenly pt-5 md:pt-6 md:px-6 md:w-full">
      <Image
        src={"/landing-page-dev/assets/logo.png"}
        width={135}
        height={36}
        quality={85}
        alt="Empleo digno para todos."
      />
      <div className="flex flex-row ml-16 gap-4 md:gap-6 md:place-content-end">
        <Button
          text="Registrarse"
          variant="primary"
          HideOnSmallViewport="true"
        />
        <Button text="Inicia sesion" variant="primary" />
      </div>
    </header>
  );
};

export default Header;
