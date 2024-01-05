/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

export default function Formulaire() {
  return (
<div>
    <div className="container mx-auto text-slate-400 mb-12 ">
      <Navbar/>

<div className="container flex flex-col text-center ">
  <h1><span className="text-blue-400 font-bold">Bonjour</span> & <span className="text-blue-400 font-bold">bienvenue</span> sur votre espace!</h1>
  <p className="text-blue-400 font-bold my-2">Se connecter</p>
<form action="" className="flex flex-col justify-center  mx-auto w-80 space-y-3">
  <input type="email" name="" id="" placeholder="Email" className="border rounded-lg"/>
  <input type="text" name="" id="" placeholder="Mdp" className="border rounded-lg"/>
<div className="flex justify-between">
  <p className="text-blue-400 font-bold my-2 text-xs">Créer mon compte</p>
  <p className=" my-2 text-xs">Mot de passe oublié?</p>
</div>
<button className="mx-auto  bg-blue-900 hover:bg-blue-950 box-shadow rounded-2xl w-28 py-2 px-2 text-white font-bold my-2 text-xs">
  Je me connecte
</button>
<p className="text-xs ">
 Si vous êtes déjà titulaire & que vous éprouvez des problèmes de connexion, veuillez envisager de <span className="underline text-blue-400">réinitialiser votre mot de passe</span> en sélectionnant l'option <span className="text-blue-400  my-2 text-xs">Mot de passe oublié</span>.
</p>
</form>
</div>
   
 <p className=" text-blue-400 hover:underline hover:text-blue-600 font-bold text-center mt-4"> <Link href='/'>← Retour</Link></p>
  </div>

   <Footer/>
</div>
   
  )
}
