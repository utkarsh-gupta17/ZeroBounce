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

const TestEmail = () => {
  return (
    <section className="w-full mt-10">
      <div className="flex-col  w-2/3 mx-auto py-8">
        <div className="flex-col w-5/6 mx-auto">
          <h1 className={`${monteserrat.className} text-center p-3 text-4xl `}>Test the email validator</h1>
          <p className={`${nunito.className} text-center p-3 text-slate-500 text-lg`}>Find out how ZeroBounce delivers superior bulk email verification with 99% accurate results. Enter an email address into the email list verification tool or upload a file to verify a list of email addresses for free.</p>
          <p className={`${nunito.className} text-center p-3 text-slate-500 text-lg`}>In seconds - learn why ZeroBounce is the best email verification service available.</p>
        </div>
        <div className="py-8 px-12 bg-[#006361] w-5/6 mx-auto rounded-2xl flex justify-evenly items-baseline">
          <button className="border-white bg-[#43b8b5] text-white mx-5 border-4 p-4 rounded-2xl">Upload your List</button>
          <span className="text-white text-xl">OR</span>
          <label htmlFor="email">
            <input type="text" placeholder="email@example.com" className="p-4 rounded-xl"/>
          </label>
          <button className="mx-5 border-4 py-4 bg-[#fbdd46] rounded-2xl px-10">Verify</button>
        </div>
      </div>
    </section>
  )
}

export default TestEmail