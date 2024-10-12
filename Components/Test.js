import Image from "next/image"


export const Test = () => {
  return (
    <div className="flex flex-col justify-center md:flex-row md:justify-between">
     <Image src="/images/samantha.png" alt="sam image" width={300} height={200} />

     <div className="text-base items-center px-3 mx-6 font-serif">
       Test this component for me
     </div>
    </div>
  )
}
