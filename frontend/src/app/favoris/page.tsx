import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from 'next/image'
import Link from "next/link";
import { AiOutlineDelete } from "react-icons/ai";

export default function Home() {
  

  return (
 <section>
     <Navbar/>
<div className="container max-w-6xl mx-auto text-center">
    
   <h1 className="font-bold my-2">Mes 3 favoris </h1>
   <p className="text-gray-600 italic">3000 annonces</p>

 <ul>
   <li className="flex justify-between text-left mx-auto items-start">
       <Link href='/product'>
 <div className="flex flex-col lg:flex-row mx-auto lg:space-x-8 space-y-4 mt-4 ">
{/* Image item */}
     <div className="flex space-x-6 items-center text-center">
<Image  src="/carte.png"
      width={200}
      height={200}
      alt="Picture of the author"
      className='rounded-xl snap-center mx-auto'
    /></div>
{/* Description item */}
        <div className="">
        <h3 className="font-bold">Peugeot 207 Noir élégant</h3>
    <p className="text-orange-300 bg-orange-500 rounded-full font-bold w-28 text-center text-xs my-2 ">Livraison possible</p>
    <p>Valence</p>
    <p>Lundi dernier à 21:20</p>
    

            </div>
{/* Actions */}
            <div className="flex space-x-3">
               <AiOutlineDelete className='text-red-500 font-bold mx-auto '/>
             
            </div>
            </div>

       </Link>
   
    {/* Divider */}
       <div className="divider h-[1px] bg-slate-200 my-6"></div>
   </li>
 </ul>
  
   

</div>
   <Footer/>
 </section>
   
  )
}
