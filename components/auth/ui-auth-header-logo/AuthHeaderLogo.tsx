import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";

export const AuthHeaderLogo = () => {
  return (
    <Link href="/">
      <Image src={Logo} alt="Logo" width={210} height={38} priority />
    </Link>
  );
};
