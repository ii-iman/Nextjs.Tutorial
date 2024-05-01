import DrinksList from "@/components/DrinksList"

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

const fetchDrink = async ()=>{
  await new Promise (resolve => setTimeout(resolve,1000))
  const res = await fetch(url)
  if(!res){
    throw new Error('failed to fetch the data!!')
  }
  const data = await res.json()
  return data
  // fetch(url).then(res => res.json())
  // .then(data => {return data})
 
}

const Drinks = async ()=>{
  const data = await fetchDrink()
  return (
    <>
    <div>
     <DrinksList drinks={data.drinks}/>
    </div>
    </>
  )
}

export default Drinks;
