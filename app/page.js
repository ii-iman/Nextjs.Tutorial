import Link from "next/link";

export default function Home() {
  return (
      
    <>

     <div>
      <h1 className="text-7xl mb-8 font-bold">Next.js Tutorial</h1>
       <Link href='/client' className='btn btn-accent'>
        GET STARTED
       </Link>
     </div>


    </>
  );
}
