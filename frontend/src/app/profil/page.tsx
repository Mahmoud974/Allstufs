import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from 'next/image'
import { HiLogin } from "react-icons/hi";


export default function Home() {
  

  return (
 <section>
     <Navbar/>
<div className="container mx-auto">
    <div className="text-center">
         <Image
      src="/carte.png"
      width={300}
      height={300}
      alt="Picture of the author"
      className='rounded-full w-36 h-36 mx-auto '
    />
    <p className="font-bold">Lenovo</p>
    <p className="underline">Acceder à mon profil</p>
    <div>
      <p>10 followers • following</p>
    </div>
    </div>


 <div className=" grid lg:grid-cols-6  gap-2 mb-12 mt-4 mx-6">

    <div className="col-span-4 bg-blue-600 w-full h-72 rounded-xl "></div>
    <div className="lg:col-span-2 col-span-4 bg-blue-600 w-full h-72 rounded-xl"></div>
    <div className="lg:col-span-2 col-span-4 bg-blue-600 w-full h-72 rounded-xl"></div>
    <div className="col-span-4 bg-blue-600 w-full h-72 rounded-xl"></div>
   </div>
 <button className="border border-blue-700 hover:bg-blue-600 text-blue-700 px-4 py-1  rounded-lg flex items-center mb-12 mx-auto "><HiLogin /> Me deconnecter</button>
</div>

   <Footer/>
 </section>
   
  )
}
