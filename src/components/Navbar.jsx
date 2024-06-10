import Image from "next/image";
import Link from "next/link";
import { Nunito_Sans,Montserrat } from "next/font/google";

const nunito = Nunito_Sans({
  weight:'800',
  size:'large',
  subsets:['latin']
})
const monteserrat = Montserrat({
  weight:'800',
  size:'large',
  subsets:['latin']
})

const Navbar = () => {
  return (
    <>
      <nav className={`${nunito.className} p-4 w-full`}>
        <div className="flex justify-evenly w-10/12 mx-auto">
            <Link href="/">
              <Image src="/logo.avif" alt="menu" width="157" height="45" />
            </Link>
            <div className="flex justify-between items-center gap-7">
              <Link href="/" className=" hover:text-yellow-400">Services</Link>
              <Link href="/" className=" hover:text-yellow-400">Enterprises</Link>
              <Link href="/" className=" hover:text-yellow-400">Pricing</Link>
              <Link href="/" className=" hover:text-yellow-400">Resources</Link>
              <Link href="/" className=" hover:text-yellow-400">Company</Link>
            </div>
            <div className={`${monteserrat.className} flex justify-between items-center gap-5`}>
              <Image src="/lang.avif" alt="menu" width="40" height="40" className="bg-black"/>
              <Link href="/" className="border-red">Log In</Link>
              <Link href="/"className="mx-5 border-4 p-4 bg-[#fbdd46] rounded-2xl border-white">Sign Up Free</Link>
            </div>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
