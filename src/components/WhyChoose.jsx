import { Nunito_Sans,Montserrat } from "next/font/google";
import Card2 from "./Card2";

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

const WhyChoose = () => {
  const cardWidth = '2/3';
  return (
    <section className='w-full mt-8 p-10'>
        <h1 className={`${monteserrat.className} text-center p-3 text-4xl`}>Why choose ZeroBounce's email verification software?</h1>
        <p className={`${nunito.className} text-center p-3 text-slate-500 text-lg`}>You want results from your email campaigns. We help you achieve them.<br/>
        Discover why we're the right partner.</p>
      <div className='flex-col w-3/4 mx-auto my-4 gap-4'>
        <div className="flex justify-evenly my-4">
          <Card2 logo={"/envelope.webp"} text1={"99% accurate email verification"} text2={"Whether you use bulk email list cleaning or real time email verification with the API, you'll get 99% accurate results - guarenteed"} num={cardWidth}/>
          <Card2 logo={"/shield.webp"} text1={"Secure email validation"} text2={"ZeroBounce is GDPR, SOC 2 Type 2, and PCI compliant. We also use military grade data encryption to protect your files during the email verification process."} num={cardWidth}/>
          <Card2 logo={"/thumb.webp"} text1={"24/7 Customer Support"} text2={"Reach out anytime via chat,email or phone. Our supprot team and engineers are here to guide you and help improve your email deliverability."} num={cardWidth}/>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose