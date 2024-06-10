import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const nunito = Nunito_Sans({
  weight:'800',
  size:'large',
  subsets:['latin']
})

const Honoree = () => {
  return (
    <section className="w-full py-12">
      <div className="w-8/12 flex mx-auto">
        <div className="flex-col w-1/2 pt-12">
          <h1 className="text-4xl font-bold leading-[4rem] mb-8">ZeroBounce, a Multiple Inc. 5000 List Honoree</h1>
          <p className="mb-12 pr-11 text-slate-500 text-md">Inc. Magazine recognized ZeroBounce four times on Inc. 5000, the list celebrating the fastest-growing companies in America. What's more, ZeroBounce made the Inc. 5000 Regionals list twice, which further fueled our passion to build top-tier email validation and deliverability tools.<br/><br/>Every day, ZeroBounce helps businesses like yours land their emails in the inbox and boost email marketing ROI. For its role in other companies success, ZeroBounce also received the Inc. Power Partner Award. Our company is among “the best B2B providers for small and medium-sized businesses” in the world.</p>
        </div>
        <div className="w-1/2 pb-10">
          <Image src="/reward.webp" alt="menu" width="700" height="700" />
        </div>
      </div>
    </section>
  )
}

export default Honoree