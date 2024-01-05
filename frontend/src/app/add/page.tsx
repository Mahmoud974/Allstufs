/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import Link from "next/link";

export default function Home() {
const [selectedFile, setSelectedFile] = useState<File | null>(null); 
const upload = () => {
    const formData = new FormData()
    console.log(formData);
    
    formData.append('file', selectedFile as File)
    axios.post('http://localhost:4000/createProduct', formData).then(res => {}).catch(err => console.log(err))
}
  return (
 <section>
     <Navbar/>
     <form action="" className="mx-4 mb-14 text-center ">
<div className="container max-w-6xl mx-auto flex flex-col space-y-4 justify-center">
    <h1 className="text-xl">Ajouter une annonce</h1>
    <label htmlFor="title">Titre de l'annonce</label>
    <input type="text" name="" id="title" className='mx-auto rounded-xl w-48'/>
     <label htmlFor="title">Choisir ta catégorie</label>
        <select name="" id="cat" className="w-48 mx-auto">
        <option value="Immobilier">Immobilier</option>
        <option value="Vehicule">Vehicule</option>
        <option value="Immobilier">Immobilier</option>
        <option value="Loc">Loc</option>
        <option value="Emploi">Emploi</option>
        <option value="Mode">Mode</option>
        <option value="Maisonjardin">Maison & jardin</option>
        <option value="Electronique">MaiElectronique</option>
        <option value="Loisirs">Loisirs</option>
        <option value="Autres">Autres</option>
        </select>
   
<div className="flex flex-col">
        <label htmlFor="price">Prix</label>
    <input type="number" name="price" id="price" className="w-28 mx-auto" />
</div>
<div>
    <p>Description de l'annonce</p>
    <textarea name="" id=""  rows={10} cols={30} className="resize-none overflow-hidden w-full"></textarea>
</div>
<div>
   <input type="file" name="" id=""  className="" onChange={(e: any)=> setSelectedFile(e.target.files[0])}/>
</div>
<Link href="/formsend"><input type="submit" value="Envoyer" className="btn btn-primary text-white mt-4 w-28 mx-auto " onClick={upload}/></Link>
</div>
</form>
   <Footer/>
 </section>
   
  )
}
