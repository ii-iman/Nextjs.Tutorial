import Image from 'next/image'
import Link from 'next/link'

const DrinksList = ({drinks}) => {
  return (
    <ul className='grid sm:grid-cols-2 gab-6 mt-6'>
        {drinks.map(drink => {
  
   return  (<li>
                <Link href={`/drinks/${drink.idDrink}`} className='text-xl font-medium'>
                    {drink.strDrink}
               <div className='relative h-48 mb-4 mr-4'>
               <Image 
               src={drink.strDrinkThumb}
               fill
               className="rounded-md object-cover"
               sizes='(max-width: 768px) 100vw ,(max-width: 1200px) 100vw'
               priority
               alt={drink.strDrink}/>
               </div>
               </Link>
            </li>)
        })}
    </ul>    
  )
}

export default DrinksList