import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex w-full justify-center items-end font-bold pb-3 md:mt-0 mt-10">
      <div className="flex flex-row">
        <ul className="flex flex-row justify-center place-content-center md:gap-9 gap-4">
          <Link href={"/terms_of_service"}>Términos y condiciones</Link>
          <Link href={"/privacy"}>Aviso de privacidad</Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
