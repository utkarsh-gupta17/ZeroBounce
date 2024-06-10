import { Nunito_Sans,Montserrat } from "next/font/google";
import Card from "./Card";
import Link from "next/link";

const nunito = Nunito_Sans({
  weight:'500',
  size:'large',
  subsets:['latin']
})
const monteserrat = Montserrat({
  weight:'700',
  size:'large',
  subsets:['latin']
})

const ValidateEmail = () => {
  const cardWidth = '2/3';
  return (
    <section className='w-full mt-8 p-10'>
        <h1 className={`${monteserrat.className} text-center p-3 text-3xl`}>How to validate your email lists with ZeroBounce</h1>
        <p className={`${nunito.className} text-center p-3 text-slate-500 text-lg`}>Clean your email list(s) with email verification software in three simple steps:</p>
      <div className='flex-col w-3/4 mx-auto my-4 gap-4'>
        <div className="flex justify-evenly my-4">
          <Card logo={"/step-1.png"} text1={"STEP 1"} text2={"Create an account"} num={cardWidth}/>
          <Card logo={"/step-2.png"} text1={"STEP 2"} text2={"Upload your email list for email delivery verification"} num={cardWidth}/>
          <Card logo={"/step-3.png"} text1={"STEP 3"} text2={"Download your new clean email list"} num={cardWidth}/>
        </div>
        <p className={`${nunito.className} text-center p-3 text-slate-500 text-lg`}>Send email campaigns with confidence. Join ZeroBounce - the best email verification service available.</p>
        <div className={`${nunito.className} border-4 bg-[#fbdd46] rounded-2xl border-white p-6 w-1/5 text-center mx-auto`}>
            <Link href="/" className="font-bold">Try It Free</Link>
        </div>
        <p className="text-slate-500 p-2 text-lg text-center">Get 100 free monthly email verifications</p>
      </div>
    </section>
  )
}

export default ValidateEmail