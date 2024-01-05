/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from 'next/image'
import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import Footer from "./components/Footer"
import Caroussel from "./components/Caroussel"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import Link from 'next/link'


export const fetchData = async () =>{
    const res = await axios.get('http://localhost:4000')
return res.data

}
export default function Home() {
  
  return (
<div>
    <div className="mx-auto text-slate-400">
    <Navbar/>

<div className="container mx-auto">
  <Caroussel/>

<div className='flex justify-center mx-auto my-6'>
<Link href="/allProducts">
  <button className="text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  All products
</button>
</Link>
</div>
  <div className="max-w-6xl lg:mx-auto mx-6  ">
      <h2  className="font-bold my-4 text-center lg:text-left" >D'après vos dernière recherche </h2>
   <div className=" grid lg:grid-cols-6  gap-2 mb-12 ">

    <div className="col-span-4 bg-blue-600 w-full h-72 rounded-xl "></div>
    <div className="lg:col-span-2 col-span-4 bg-blue-600 w-full h-72 rounded-xl"></div>
    <div className="lg:col-span-2 col-span-4 bg-blue-600 w-full h-72 rounded-xl"></div>
    <div className="col-span-4 bg-blue-600 w-full h-72 rounded-xl"></div>
   </div>
  </div>
</div>
 
  </div> 
   <Footer/>
</div>
   
  )
}
