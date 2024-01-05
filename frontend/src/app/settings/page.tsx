import { TiDeleteOutline } from "react-icons/ti";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { HiLogin } from "react-icons/hi";
import { IoMdAddCircleOutline } from "react-icons/io";


export default function Home() {
  

  return (
 <section>
     <Navbar/>
<div className="container mx-auto ">
<h1 className="font-bold">Paramétres</h1>

<p className="my-4">Information de compte</p>
<div className="space-y-4">
  <div className="flex items-center">
  <input type="radio" name="Monsieur" id="Monsieur" />
  <label htmlFor="Monsieur" className='mx-2'>Monsieur</label>
   <input type="radio" name="Madame" id="Madame" />
  <label htmlFor="Madame" className='ml-2'>Madame</label>
</div>
<form className="mt-4 w-98">
 <div className="mb-4">
   <label htmlFor="nom">Nom</label>
  <input type="text" name="nom" id="nom" className="ml-2 rounded-md"/> 
 </div>
  <div className="mb-4">
      <label htmlFor="nom" className="">Prénom</label>
  <input type="text" name="prenom" id="prenom" className="ml-2 rounded-md"/> 
  </div>
<div className="mb-4">
    <label htmlFor="nom" className="">Date de naissance</label>
  <input type="text" name="prenom" id="prenom" className="ml-2 rounded-md"/> 
</div>
<h2 className="font-bold my-2">Adresse</h2>

<div className="mb-4">
   <label htmlFor="name">Adresse</label>
  <input type="text" name="name" id="name" className="ml-2 rounded-md"/> 
</div>

 <label htmlFor="city">Ville ou code postal</label>
  <input type="text" name="city" id="city" className="ml-2 rounded-md"/> 
</form>

<h2 className="font-bold my-2">Email</h2>

<p>ijoijo@gmail.com</p>


<button className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-1  rounded-lg flex items-center">Enregister les modifications</button>
<div className="divider h-[1px] bg-slate-200 my-4"></div>
</div>
  <button className="bg-red-700 hover:bg-red-600 text-white px-4 py-1  rounded-lg flex items-center my-12"><TiDeleteOutline /> Supprimer mon compte</button>

</div>

   <Footer/>
 </section>
   
  )
}
