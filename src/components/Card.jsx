import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div className='flex-col border-4 border-black bg-[#f8f4fb] p-10'>
      <div><Image src="/step-1.png" width="100" height="100" className="mx-9 my-3"/></div>
      <p className='text-center'>Step 1</p>
      <p className='text-center'>Create an account</p>
    </div>
  )
}

export default Card