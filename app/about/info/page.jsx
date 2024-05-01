import Link from "next/link";

export default function Info() {
  return (
    <>
    <div>
        <h1 className='text-7xl'>About Page</h1>
        <br />
        <Link href='/about' className="text-2xl">
          About Page
        </Link>
        <br />
        <Link href='/' className="text-2xl">
          Home Page
        </Link>
    </div>
    </>
  )
}
