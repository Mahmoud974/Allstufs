import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { RxCardStack } from "react-icons/rx";
import { RiCustomerService2Fill, RiMoneyEuroBoxFill } from "react-icons/ri";
export default function Footer() {
    return ( 
       <footer>
         {/* Barre de conditions */}
         <div className=" bg-gray-800 h-28 w-full lg:flex items-center hidden">
            <ul className="container mx-auto flex flex-row text-center  justify-between max-w-6xl">
                <li>
                    <div className="flex flex-col text-center justify-center">
                        <MdOutlineLibraryAddCheck className="text-3xl  mx-auto" />
                        <p className="w-16 text-md mt-1 ">Satisfait</p>
                        <p className="text-xs">Achat vérifié</p>
                    </div>
                 </li>
                 <li>
                    <div className="bg-gray-700 h-full w-[0.1rem]"></div>
                 </li>
                 <li>
                    <div className="flex flex-col text-center justify-center">
                        <RiMoneyEuroBoxFill className="text-3xl mx-auto" />
                        <p className="w-16 text-md mt-1">Économiser</p>
                        <p className="text-xs text-center">Achat vérifié</p>
                    </div>
                 </li>
                 <li>
                    <div className="bg-gray-700 h-full w-[0.1rem]"></div>
                 </li>
                 <li>
                    <div className="flex flex-col text-center justify-center">
                        <RiCustomerService2Fill className="text-3xl mx-auto" />
                        <p className="w-16 text-md mt-1 ">Service </p>
                        <p className="text-xs">Achat vérifié</p>
                    </div>
                 </li>
                 <li>
                    <div className="bg-gray-700 h-full w-[0.1rem]"></div>
                 </li>
                 <li>
                    <div className="flex flex-col text-center justify-center">
                        <RxCardStack className="text-3xl mx-auto" />
                        <p className="w-16 text-md mt-1 ">la carte</p>
                        <p className="text-xs text-center">Achat vérifié</p>
                    </div>
                 </li>

            </ul>
         </div>
         {/* Footer blue */}
    <div className="bg-blue-900  py-12 items-center flex  justify-around text-xs text-white ">
    <div >
<div className="flex  lg:space-x-32 flex-col lg:flex-row space-y-12 lg:space-y-0 justify-center lg:items-start mx-auto">
    <ul className="text-center">
    <li><h3 className="font-bold">À PROPOS DU BONCOIN</h3></li>
    <li><Link href='/'>Qui nous sommes-nous?</Link></li>
    <li><Link href='/'>Nous rejoindre</Link></li>
    <li><Link href='/'>Nos engagements</Link></li>
    <li><Link href='/'>L’Avenir a du bon</Link></li>
    <li><Link href='/'>Le bon observatoire</Link></li>
    <li><Link href='/'>Espace presse</Link></li>
    </ul>

     <ul className="text-center">
    <li><h3 className="font-bold">INFORMATIONS LÉGALES</h3></li>
    <li><Link href='/'>Conditions générales d’utilisation</Link></li>
    <li><Link href='/'>Référencement et classement </Link></li>
    <li><Link href='/'>Conditions générales de vente</Link></li>
    <li><Link href='/'>Vie privée / cookies</Link></li>
    <li><Link href='/'>Avis utilisateurs</Link></li>
    <li><Link href='/'>Charte de bonne conduite</Link></li>
    <li><Link href='/'>Paiement en plusieurs fois</Link></li>
    </ul>

     <ul className="text-center">
    <li><h3 className="font-bold">NOS SOLUTIONS PROS</h3></li>
    <li><Link href='/'>Publicité</Link></li>
    <li><Link href='/'>Vos recrutements</Link></li>
    <li><Link href='/'>Professionnels de l’immobilier</Link></li>
  
    </ul>

     <ul className="text-center">
    <li><h3 className="font-bold ">DES QUESTIONS ?</h3></li>
    <li><Link href='/'>Aide</Link></li>
    <li><Link href='/'>Le service de paiement sécurisé et la livraison</Link></li>
    <li><Link href='/'>Le porte-monnaie</Link></li>
    <li><Link href='/'>Le service de réservation </Link></li>
    <li><Link href='/'>Votre dossier de location en ligne</Link></li>
    <li><Link href='/'>Votre espace bailleur</Link></li>
    </ul>
</div>


<div className="divider h-[1px] bg-slate-200 my-4 "></div>
<p className="text-center">Mahmoud Zakaria 2024</p>
<div className="divider h-[1px] bg-slate-200 my-4"></div>
 <div className='flex justify-between flex-col lg:flex-row text-center'>
    <p>leboncoin 2020 - 2024</p>
    <div className="flex items-center text-xl flex-col lg:flex-row "><p className="mr-4">Retrouve-nous sur</p> 
    <div className="flex space-x-3 mt-2 items-center ">
      <FaFacebookSquare /> <AiFillTwitterSquare /> <BsInstagram />
    </div>
     </div>
   </div>
</div>
  
    </div>
       </footer>
  )
}
