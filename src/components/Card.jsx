import Image from 'next/image'
import { Nunito_Sans,Montserrat } from "next/font/google";

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
"/step-1.png"

const Card = ({logo,text1,text2,num}) => {
  return (
    <div className={`flex-col bg-[#f8f4fb] py-10 justify-center w-${num} rounded-2xl m-2`}>
      <div><Image src={logo} width="100" height="100" className='mx-auto'/></div>
      <p className='text-center text-[#8253ba] p-6'>{text1}</p>
      <p className={`${monteserrat.className} text-center text-xl m-4`}>{text2}</p>
    </div>
  )
}

export default Card