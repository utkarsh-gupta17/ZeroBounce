import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const nunito = Nunito_Sans({
  weight:'800',
  size:'large',
  subsets:['latin']
})

const HeroSection = () => {
  return (
    <section className="w-full py-10">
      <div className="w-8/12 flex mx-auto">
        <div className="flex-col w-1/2 pt-12">
          <h1 className="text-5xl font-bold leading-[4rem] mb-8">Accurate, fast and <br/> secure email <br/> validation service</h1>
          <p className="mb-12 pr-11 text-slate-500 text-xl">You invest for better email marketing ROI. We help you find valid emails and connect with your customers. Boost your inbox placement and open rates with 99% accurate real-time email validation software and email deliverability tools like Email Scoring, Email Finder, email testing, and sender reputation monitoring.</p>
          <div className={`${nunito.className} border-4 bg-[#fbdd46] rounded-2xl border-white p-6 w-1/2 text-center`}>
            <Link href="/">Try It Free</Link>
          </div>
          <p className="italic p-2">Get 100 free monthly email verifications</p>
        </div>
        <div className="w-1/2 pb-10">
          <Image src="/hero.webp" alt="menu" width="700" height="700" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection