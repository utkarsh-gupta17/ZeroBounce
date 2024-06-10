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
const Footer = () => {
  return (
    <>
    <section className="w-full py-10 bg-[#5f2781]">
      <div className="w-8/12 flex mx-auto justify-around">
      {/* <div className="callout"></div> */}
        <div className="flex-col w-2/5 pt-12">
          <h1 className="text-3xl font-bold mb-8 text-white leading-9">The best email verification service starts with ZeroBounce</h1>
          <div className={`${nunito.className} bg-[#fbdd46] rounded-2xl p-6 w-3/4 text-center`}>
            <Link href="/">Try It Free</Link>
          </div>
          <p className="italic p-2 text-white">Get 100 free monthly email verifications</p>
        </div>
        <div className="w-1/3 pb-10 flex items-center justify-center">
          <Image src="/foot.avif" alt="menu" width="300" height="300" className="mx-auto"/>
        </div>
      </div>
    </section>
    </>
  )
}

export default Footer