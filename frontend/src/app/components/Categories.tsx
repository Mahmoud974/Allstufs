import Image from 'next/image';

export default function Home() {
  

  return (
  
<div className="container">
    <h2 className="font-bold my-4">Catégories</h2>
    
    <ul className='snap-x flex space-x-2'>
      <li>
     <Image
      src="/carte.png"
      width={200}
      height={200}
      alt="Picture of the author"
      className='rounded-xl snap-center'
    />
</li>
<li>
     <Image
      src="/carte.png"
      width={200}
      height={200}
      alt="Picture of the author"
      className='rounded-xl snap-center'
    />
</li>
<li>
     <Image
      src="/carte.png"
      width={200}
      height={200}
      alt="Picture of the author"
      className='rounded-xl snap-center'
    />
</li>
      <li>
     <Image
      src="/carte.png"
      width={200}
      height={200}
      alt="Picture of the author"
      className='rounded-xl'
    />
      </li>
      <li>
     <Image
      src="/carte.png"
      width={200}
      height={200}
      alt="Picture of the author"
      className='rounded-xl'
    />
      </li><li>
     <Image
      src="/carte.png"
      width={200}
      height={200}
      alt="Picture of the author"
      className='rounded-xl'
    />
      </li><li>
     <Image
      src="/carte.png"
      width={200}
      height={200}
      alt="Picture of the author"
      className='rounded-xl'
    />
      </li>
    </ul>
   
</div>
   
  )
}
