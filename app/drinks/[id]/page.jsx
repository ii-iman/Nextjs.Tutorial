import Link from "next/link";
// import DrinkImg from '@/img/drink.jpg'
import Image from "next/image";


const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const getSingleDrink = async(id) =>{

    const res =  await fetch(`${url}${id}`)
    if(!res.ok){
        throw new Error('failed to fetch the data!!');
    }
    return res.json();
}

const SingleDrinkPage = async ({params})=>{

  const data = await getSingleDrink(params.id)

  const title = data?.drinks[0]?.strDrink
  const imgSrc = data?.drinks[0]?.strDrinkThumb
  
    return (
        <>
          <Link href='/drinks' className="btn btn-primary mt-8 mb-12">
             Back To Drinks
          </Link>
        {/* <Image src={DrinkImg} className="w-48 h-48 rounded" alt="drink Image"/> */}
           <div className="relative w-60 h-48 mb-4">
              <Image 
               src={imgSrc}
               fill
               sizes='(max-width: 768px) 100vw ,(max-width: 1200px) 100vw'
               className="rounded-md object-cover"
               priority
               alt={title}/>
           </div>
          <h1 className="text-4xl mb-8">
            {title}
          </h1>
        </>
    )
}
export default SingleDrinkPage;
