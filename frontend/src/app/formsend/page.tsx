/* eslint-disable react/no-unescaped-entities */
"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaRegCheckCircle } from "react-icons/fa";

export default function Home() {

  return (
 <section>
        <Navbar/>
<h1 className="text-3xl flex items-center my-28 ml-16">Annonces envoyés <FaRegCheckCircle className="text-green-500 ml-4"/> </h1>
   <Footer/>
 </section>
   
  )
}
