import Link from "next/link";

import Image from "next/image";
import logo from "../../../assets/images/laptop.png";
import NavBar from "./navBar";

const Header = () => {
  return (
    <header className='flex justify-around items-center py-4 bg-wine-100 shadow-md'>
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
