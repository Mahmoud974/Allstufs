/* eslint-disable react/no-unescaped-entities */
"use client"
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { FiMessageCircle } from "react-icons/fi";
import { IoPricetagOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { fetchData } from "@/app/allProducts/page";
import { useQuery } from "react-query";

export default function Product() {

 const { data, isLoading, isError } = useQuery('data', fetchData);
 const pathname:string = usePathname().split('/')[2]
 const findEl = data?.find((el:any) => el._id === pathname)
 const router = useRouter()
 const handleGoBack = ():void => router.back();

  return (
<div className=" text-white">
    <div className="container mx-auto text-slate-400">
    <Navbar/>

    <ul className="flex space-x-2 my-4">
      <li ><Link href='/' className="underline">Acceuil</Link> <span className="no-underline">{'>'} </span></li>
      <li ><Link href='/' className="underline">Moto</Link> <span className="no-underline">{'>'} </span></li>
      <li ><Link href='/' className="underline">Rhône-Alpes</Link> <span className="no-underline">{'>'} </span></li>
      <li ><Link href='/' className="underline">Drôme</Link> <span className="no-underline">{'>'} </span></li>
      <li ><Link href='/' className="underline">Tain l'hermitage</Link> <span className="no-underline">{'>'} </span></li>
      <li > <p>Mt07</p> </li>
    </ul>
<div className="container mx-auto flex  justify-between ">
   <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    Image
    </div>


<div className="bg-white h-96 w-96 rounded-xl ml-6">
  <div className="flex items-center justify-evenly flex-col text-center mt-12">
    <Image  alt='oko' src="/carte.png" className="rounded-full h-24 w-24" width={200} height={200}  />
   <div className="flex flex-col ">
     <h3 className="font-bold">Clément</h3>
    <p>2 annonces</p>
   </div>
  
  <div>
    <p>Répond généralement en 10 mins </p>
<div>

<div className="divider h-[1px] bg-slate-200 my-4  "></div>
<div className='space-y-2'>
   <button className="bg-orange-400 hover:bg-orange-500 text-white w-full justify-center py-1 mx-auto rounded-lg flex items-center"><IoPricetagOutline className="mr-1"/> Réserver</button>
 <button className="bg-blue-900 hover:bg-blue-950 text-white w-full justify-center py-1 mx-auto rounded-lg flex items-center"><FiMessageCircle  className="mr-1"/> Envoyer un message</button>
</div>
  </div>
  </div>

</div>
</div>
</div>

<div className="divider h-[1px] bg-slate-200 my-12"></div>
<div>
    <h1 className="text-4xl text-white font-bold my-4 flex items-center"> {findEl?.title} <span className="ml-2 bg-orange-400 px-2 rounded-lg box-shadow text-xl">{findEl?.price.toLocaleString()}€</span></h1>
    <p><i>{findEl?.city}</i> • Drôme </p>
    <i> Neuf sans étiquette</i>
    <p>{new Date(findEl?.date).toLocaleString()}</p>

</div>
  <p className="text-orange-300 bg-orange-500 rounded-full font-bold w-28 text-center text-xs my-2">Livraison possible</p>
<div className="w-9/12  mt-3 mb-8">
  <h4 className="text-xl font-bold ">Description</h4>
  <p>{findEl?.description}</p>
</div>

  <button onClick={handleGoBack} className="text-center mx-auto my-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Back
</button>

</div>
   <Footer/>
</div>
   
  )
}