import { FaRegHeart  } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import Image from 'next/image'
import { IoMdAddCircleOutline } from "react-icons/io"; 
import Link from "next/link";
import { LuBuilding } from "react-icons/lu";
import { MdOutlineDirectionsCar, MdOutlineHolidayVillage, MdOutlineSportsBasketball, MdPresentToAll } from "react-icons/md";
import { CgWorkAlt } from "react-icons/cg";
import { BsFillLightningChargeFill } from "react-icons/bs"
import { IoMdFlower } from "react-icons/io";
import { PiPants } from "react-icons/pi";

interface Categories {
    cat: string;
    icon: JSX.Element;
}

export const categoriesWithIcons:Categories[] = [
  { cat: "Immobilier", icon: <LuBuilding className='mx-auto cursor-pointer' /> },
  { cat: "Transport", icon: <MdOutlineDirectionsCar className='mx-auto text-lg cursor-pointer' /> },
  { cat: "Multimedia", icon: <MdOutlineHolidayVillage className='mx-auto text-lg cursor-pointer' /> },
  { cat: "Emploi", icon: <CgWorkAlt className='mx-auto cursor-pointer' /> },
  { cat: "Mode", icon: <PiPants className='mx-auto cursor-pointer' /> },
  { cat: "Maison & Jardin", icon: <IoMdFlower className='mx-auto cursor-pointer' /> },
  { cat: "Electronique", icon: <BsFillLightningChargeFill className='mx-auto cursor-pointer' /> },
  { cat: "Loisirs", icon: <MdOutlineSportsBasketball className='mx-auto cursor-pointer' /> },
  { cat: "Autres", icon: <MdPresentToAll className='mx-auto cursor-pointer' /> },
];

export default function Navbar() {

  return (
  
   <nav className="relative xl:px-0 lg:px-6">
    <div className="navbar bg-base-100 mx-auto xl:max-w-6xl px-0">
  <div className="navbar-start">
    <div className="dropdown">
  
    
    </div>
   <Link href='/'>
      <Image
       src="/logo.svg"
      priority
      width={100}
      height={100}
      alt="Picture of the author"
    />
     </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0 ">
      <li> <Link href='/add'><button className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-1  rounded-lg flex items-center"><IoMdAddCircleOutline className="mr-1"/> Déposer une annonce</button></Link>
    </li>
    <li>
        <input type="search" name="" id="" placeholder="Rechercher sur leboncoin" className="bg-slate-100 rounded-lg"/>
    </li>
   </ul>
  </div>
    <div className="navbar-end">
  <ul className="menu menu-horizontal ">
      <li>
        <Link href='/favoris'>
         <FaRegHeart className='hover:text-blue-400 cursor-pointer' />
         </Link>
      </li>
    
      <li>
    <Link href='/profil'>
        <RiAccountCircleLine className='hover:text-blue-400 cursor-pointer' />
      </Link>
 </li>
    </ul>
  </div>
  
</div>
{/* Format deskop */}
<div>
   <ul className="lg:flex justify-between mt-6 text-slate-400 xl:max-w-6xl mx-auto hidden mb-8">
    {categoriesWithIcons.map((category: Categories, index:number) => (
            <li key={index} className="hover:text-blue-400 flex flex-col cursor-pointer ">
              <Link href={`/lists/${category.cat}`} className="cursor-pointer">
                {category.icon}
                {category.cat}
              </Link>
            </li>
          ))}

  </ul>
</div>
{/* Format phone */}
<div className="flex mx-auto justify-center relative z-10 lg:hidden">
  <ul className="menu menu-horizontal px-26">
      
      <li>
        <details>
          <summary className="border border-white">Catégories</summary>
          <ul className="">
           {categoriesWithIcons.map((category: Categories, index:number) => (
            <li key={index} className="hover:text-blue-400 flex flex-col cursor-pointer ">
              <Link href={`/lists/${category.cat}`} className="cursor-pointer">
                {category.icon}
                {category.cat}
              </Link>
            </li>
          ))}
          </ul>
        </details>
      </li>
 
    </ul>
  </div>
  <div className="divider h-[1px] bg-slate-200 my-4"></div>
   </nav>
   
  )
}
