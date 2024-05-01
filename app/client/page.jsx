'use client'
import { useState } from "react"

export default function Client() {

  const [count , setCount] = useState(0)

  return (
    <>
    <h1 className="text-7xl font-bold mb-4 mr-2 text-center">{count}</h1>
    <div className="flex justify-center items-center">
    <button className="btn btn-primary mr-2" onClick={()=> setCount(prev => prev + 1)}>
      increase
    </button>
    <button className="btn btn-primary" onClick={()=> setCount(prev => prev - 1)}>
      decrease
    </button>
    </div>
    </>
  )
}
