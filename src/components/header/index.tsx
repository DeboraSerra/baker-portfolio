import Link from "next/link";

import Image from "next/image";
import logo from "../../../assets/images/laptop.png";
import NavBar from "./navBar";

const Header = () => {
  return (
    <header className='flex justify-between items-center py-4 px-12 bg-wine-100 shadow-md relative'>
      <div>
        <Link href='/'>
          <Image src={logo} alt='Laptop' width={50} height={50} />
        </Link>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
