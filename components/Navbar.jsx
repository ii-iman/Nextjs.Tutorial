import Link from "next/link";

const links = [
    {href: '/client' ,label: 'client'},
    {href: '/drinks' ,label: 'Drinks'},
    {href: '/prisma-example' ,label: 'Prisma Example'},
    {href: '/query' ,label: 'Query'},
    {href: '/tasks' ,label: 'Tasks'},
]

export const Navbar =()=>{
  return(
    <>
      <nav className="bg-base-300 py-4">
        <div className="navbar px-8 max-w-6xl flex-col sm:flex-row ">
            <Link href='/' className="btn btn-primary">
                Next.js
            </Link>

         <ul className="menu menu-horizontal md:ml-8">

         {links.map(link => {
            return (<li key={link.href} className="capitalize w-full sm:w-auto"> 
            <Link href={link.href}>{link.label}</Link>
            </li>)
         })}

         </ul>
  

        </div>
      </nav>
    </>
  )
}
