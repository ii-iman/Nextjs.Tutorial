import TaskFormCustom from "@/components/TaskFormCustom"
import TaskList from "@/components/TaskList"
export const dynamic = 'force-dynamic'


const TaskPage = () => {
  return (
   <>
   <div className="max-w-lg">
     {/* <TaskForm/> */}
     <TaskFormCustom/>
     <TaskList/>
   </div>
   </>
  )
}

export default TaskPage