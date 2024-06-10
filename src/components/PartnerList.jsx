import { Montserrat } from "next/font/google";
import Image from "next/image";
const monteserrat = Montserrat({
  weight:'800',
  size:'large',
  subsets:['latin']
})
const PartnerList = () => {
  return (
    <section className={`${monteserrat.className} bg-[#f7f4fb] my-8 w-full`}>
        <div className="partner-content w-2/3 mx-auto py-10">
          <h1 className='text-center text-3xl'>The No. 1 email validation service for 325,000+ clients</h1>
          <ul className='flex gap-4 justify-center p-8 items-baseline'>
            <li><Image src="/samsung.avif" width="100" height="100" className="mx-9 my-3"/></li>
            <li><Image src="/aribnb.avif" width="100" height="100" className="mx-9 my-3"/></li>
            <li><Image src="/linkedin.avif" width="100" height="100" className="mx-9 my-3"/></li>
            <li><Image src="/pwc.avif" width="100" height="100" className="mx-9 my-3"/></li>
          </ul>
        </div>
      </section>
  )
}

export default PartnerList