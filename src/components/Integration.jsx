import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const nunito = Nunito_Sans({
  weight:'700',
  size:'large',
  subsets:['latin']
})

const HeroSection = () => {
  return (
    <section className="w-full py-10">
      <div className="w-8/12 flex mx-auto">
        <div className="w-1/2 pb-10">
          <Image src="/integration.avif" alt="menu" width="800" height="800" />
        </div>
        <div className="flex-col w-1/2 pt-2">
          <h1 className="text-5xl font-bold leading-[4rem] mb-8">ZeroBounce email verification for all your favorite platforms</h1>
          <p className="mb-6 pr-11 text-slate-500 text-lg">Connect ZeroBounce's real-time email verification API to the email marketing and delivery platforms you love. Leverage the email list verification tool for bulk email verification or real-time email list cleaning as visitors submit their addresses.<br/><br/>Enjoy email delivery verification for more than 40 popular website builders, CRMs, email delivery service providers, and more.</p>
          <div className={`${nunito.className} border-4 bg-[#fbdd46] rounded-2xl border-white p-6 w-1/2 text-center`}>
            <Link href="/">View all Integrations</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection