import prisma from "@/utils/db"


const prismaHandlers = async()=>{
  // await prisma.task.create({
  //   data : {
  //     content : 'wake up'
  //   }
  // })
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc"
    }
  })
  return allTasks
}

const PrismaExample = async ()=> {

  const tasks = await prismaHandlers()
  
  if(tasks.length === 0 ){
    return <h2 className="mt-8 font-medium text-lg">No tasks to show</h2>
  }

  return (
    <>
    <h1 className="text-7xl">Prisma Example Page</h1>
    
     {tasks.map(task =>{
      return(  
        <h2 key={task.id} className="test-xl py-2">
          😉{task.content}
        </h2>
      )
     })}

    </>
  )
}

export default PrismaExample 