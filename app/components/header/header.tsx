import Image from "next/image";
import Button from "../buttons/Button";

const Header = () => {
  return (
    <header className="flex flex-row justify-between pt-6 px-6 w-full">
      <Image
        src={"/assets/logo.png"}
        width={135}
        height={36}
        quality={85}
        alt="Empleo digno para todos."
      />
      <div className="flex flex-row gap-6 place-content-end">
        <Button text="Registrarse" variant="primary" />
        <Button text="Inicia sesion" variant="primary" />
      </div>
    </header>
  );
};

export default Header;
