import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex w-full justify-center items-end font-bold pb-3 md:mt-0 mt-10">
      <div className="flex flex-row">
        <ul className="flex flex-row justify-center place-content-center gap-9">
          <Link href={"/"}>Nosotros</Link>
          <Link href={"/"}>Aviso legal</Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
