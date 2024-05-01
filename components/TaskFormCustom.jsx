'use client'
import { createTaskCustom } from "@/utils/actions"
import { useEffect } from "react"
import { useFormStatus , useFormState } from 'react-dom'
import toast from "react-hot-toast"

const SubmitBtn = ()=>{

  const {pending} = useFormStatus()

  return(
    <button 
      type='submit' 
      className='btn btn-primary join-item'
      disabled={pending}
      >
      {pending ? 'Please Wait...' :  'create task'}
    </button>
  )
} 

const intialState  = {
  message : null,
}

const TaskFormCustom = () => {

   const [state , formAction] = useFormState(createTaskCustom, intialState)

   useEffect(()=>{
     if(state.message === 'error'){
      toast.error('there was an error...')
      return 
    }
     if(state.message){
      toast.success('task created😊')
     }
   },[state])
   
  return (
    <>
    <form action={formAction}>
    {/* {state.message ? <p className="mb-2 text-black">{state.message}</p> : null} */}
      <div className='join w-full'>
        <input 
        type="text" 
        className='input input-bordered join-item w-full'
        placeholder='Type Here'
        name='content'
        required
      />
       <SubmitBtn/>
      </div>
    </form>
    </>
  )
}

export default TaskFormCustom