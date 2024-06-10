import Image from "next/image";

const SecurityStrip = () => {
  return (
      <section className="bg-white my-10 w-full">
          <ul className="p-10 h-[300px] w-2/3 mx-auto">
            <div className="flex flex-wrap justify-center items-center mx-auto p-4">
              <li><Image src="/sec1.webp" alt="menu" width="150" height="150" className="mx-9 my-3"/></li>
              <li><Image src="/sec2.avif" alt="menu" width="150" height="150" className="mx-9 my-3"/></li>
              <li><Image src="/sec3.avif" alt="menu" width="150" height="150" className="mx-9 my-3"/></li>
              <li><Image src="/sec4.avif" alt="menu" width="150" height="150" className="mx-9 my-3"/></li>
              <li><Image src="/sec5.avif" alt="menu" width="150" height="150" className="mx-9 my-3"/></li>
              <li><Image src="/sec6.avif" alt="menu" width="150" height="150" className="mx-9 my-3"/></li>
              <li><Image src="/sec7.avif" alt="menu" width="150" height="150" className="mx-9 my-3"/></li>
            </div>
          </ul>
      </section>
  )
}

export default SecurityStrip