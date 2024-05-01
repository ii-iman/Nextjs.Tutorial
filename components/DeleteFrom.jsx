'use client'
import { deleteTask } from "@/utils/actions"
import { useFormStatus } from 'react-dom'




const SubmitBtn  = ()=>{
  const {pending} = useFormStatus()
  return(
    <button 
    type="submit"
    disabled={pending}
    className='btn btn-error btn-xs'
    >
     {pending ? 'pedding...' : 'delete' } 
    </button>
  )
}




const DeleteFrom = ({id}) => {
  return (
    <>
    <form action={deleteTask}>
      <input 
      type="hidden"  
      name='id'
      value={id}
      />
    <SubmitBtn/>
    </form>
    </>
  )
}

export default DeleteFrom