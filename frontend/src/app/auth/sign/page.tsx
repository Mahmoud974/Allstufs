/* eslint-disable react/no-unescaped-entities */
"use client"

import Footer from "@/app/components/Footer"
import Navbar from "@/app/components/Navbar"
import axios  from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"


export default function Formulaire() {


  return (
<div>
    <div className="container mx-auto text-slate-400 mb-12 ">
      <Navbar/>

<div className="container flex flex-col text-center ">
  <h1><span className="text-blue-400 font-bold">Bonjour</span> & <span className="text-blue-400 font-bold">bienvenue</span> sur votre futur espace!</h1>
  <p className="text-blue-400 font-bold my-2">Creer votre compte</p>
<form action="" className="flex flex-col justify-center  mx-auto w-80 space-y-3">
  <input type="text" name="" id="" placeholder="Pseudo" className="border rounded-lg"/>
  <input type="email" name="" id="" placeholder="Email" className="border rounded-lg"/>
  <input type="text" name="" id="" placeholder="Mdp" className="border rounded-lg"/>

<button className="mx-auto  bg-blue-900 hover:bg-blue-950 box-shadow rounded-2xl w-28 py-2 px-2 text-white font-bold my-2 text-xs">
 Creer mon compte
</button>

</form>
</div>
   
 <p className=" text-blue-400 hover:underline hover:text-blue-600 font-bold text-center mt-4"> <Link href='/'>← Retour</Link></p>
  </div>

   <Footer/>
</div>
   
  )
}
