import Link from "next/link";

export default function About() {
  return (
    <div>
        <h1 className='text-7xl'>About Page</h1>
        <br />
        <Link href='/info' className="text-2xl">
          Info Page
        </Link>
        <br />
        <Link href='/' className="text-2xl">
          Home Page
        </Link>
    </div>
  )
}
