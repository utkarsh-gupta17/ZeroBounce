import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Nunito_Sans,Montserrat } from "next/font/google";
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaYoutube,FaInstagram,FaTumblr } from "react-icons/fa";


const nunito = Nunito_Sans({
  weight:'500',
  size:'large',
  subsets:['latin']
})
const monteserrat = Montserrat({
  weight:'600',
  size:'large',
  subsets:['latin']
})

const FooterLast = () => {
  return (
    <section className='w-full flex py-10 bg-[#f7f4fb]'>
      <div className='flex w-2/3 mx-auto p-12 justify-between'>
        <div>
          <Link href="/">
                <Image src="/logo.avif" alt="menu" width="157" height="45" />
          </Link>
          <p className={`${nunito.className} text-slate-500 mt-8`}>© 2024 ZeroBounce.</p>
          <p className={`${nunito.className} text-slate-500 mb-8`}>All rights reserved.</p>
          <Link href="/">
                <Image src="/store.avif" alt="menu" width="157" height="45" />
          </Link>
        </div>
        <div className='flex-col'>
          <h2 className={`${monteserrat.className}`}>COMPANY</h2>
          <ul className={`${nunito.className} text-slate-500`}>
            <li>About Us</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Press</li>
            <li>Pricing</li>
            <li>Partners</li>
            <li>ZeroBounce Blog</li>
            <li>Email Verifier</li>
            <li>Leave your feedback</li>
            <li>Updates</li>
          </ul>
        </div>
        <div className='flex-col'>
          <h2 className={`${monteserrat.className}`}>LEGAL</h2>
          <ul className={`${nunito.className} text-slate-500`}>
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>Sitemap</li>
            <li>CA Privacy</li>
            <li>GDPR</li>
            <li>Security</li>
          </ul>
        </div>
        <div className='flex-col'>
          <h2 className={`${monteserrat.className}`}>CONTACT US</h2>
          <ul className={`${nunito.className} text-slate-500`}>
            <li>US: 1-888-500-9521</li>
            <li>EU: +44-330-808-4814</li>
            <li>24/7 Support Guarenteed</li>
            <li>support@zerobounce.net</li>
            <div className='flex gap-4 m-2'>
              <span><FaFacebookF /></span>
              <span><FaTwitter /></span>
              <span><FaLinkedinIn /></span>
              <span><FaYoutube /></span>
              <span><FaInstagram /></span>
              <span><FaTumblr /></span>
            </div>
          </ul>
        </div>
      </div>
      <hr />
    </section>
  )
}

export default FooterLast