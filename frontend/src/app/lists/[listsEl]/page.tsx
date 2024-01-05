"use client"
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Image from 'next/image'

import { useQuery } from "react-query";
import Link from "next/link";
import axios from "axios";

export const fetchData = async ():Promise<any> =>{
const res = await axios.get('http://localhost:4000/getAllProducts')
return res.data.products

}

export default function Lists({params}:any) {
  const { data, isLoading, isError } = useQuery('data', fetchData);
  const filterData = data?.filter((item:any) => item.category === params.listsEl)

  


  return (
 <section>
     <Navbar/>
<div className="container mx-auto max-w-6xl text-center lg:text-left">
    
   <h1 className="font-bold my-2">Annonces Location {params.listsEl === "Maison%20%26%20Jardin" ? "Maison & Jardin"  : params.listsEl } </h1>
   <p className="text-gray-600 italic">{filterData?.length } annonce{filterData?.length  >= 0? "" : "s" }</p>

    <ul className="mb-12">
      {filterData?.map((item:any, index: number) => <Link href={`/product/${item._id}`} key={index}>
       <li className="mt-6 cursor-pointer" >
            <div className="flex lg:flex-row lg:text-left text-center  flex-col space-x-6 items-center">
                <Image  src="/carte.png"
      width={200}
      height={200}
      alt="Picture of the author"
      className='rounded-xl snap-center'
    />
    <div >
        <h3 className="font-bold">{item.title}</h3>
    <p className="text-orange-300 mx-auto lg:mx-0 bg-orange-500 rounded-full font-bold w-28 text-center text-xs my-2">Paiment sécurisé</p>
   <div className="flex space-x-2 lg:space-x-6">
    <p className="text-blue-400 font-bold">{item.category}</p>
     <p className="font-medium">City: <span className="font-bold">{item.city}</span></p>
    <p className="font-bold bg-blue-600 px-2 rounded-md">{item.price} €</p>
   </div>
    </div>
            </div>
            <div className="divider h-[1px] bg-slate-200 my-4"></div>
        </li>
      </Link>
        )}
    </ul>
</div>
   <Footer/>
 </section>
   
  )
}
