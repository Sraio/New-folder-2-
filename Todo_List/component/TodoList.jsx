import { use, useState } from "react"

export default function TodoList(){
    const [tasks, setTasks ]= useState([]);

const[task,setTask] = useState("");
console.log(task);
const addTask=()=>{
    const updatedTasks =[...tasks,{
        id : Date.now(),
        task:task,
        completed: false
    }];

   
   setTasks(updatedTasks);
   setTask("");
}
console.log(tasks);

    return(
        <>
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl text-emerald-600">My Todo List</h1>
                <p className="text-gray-400">Keep track of your task.</p>
           <div className="flex gap-3">
                <input value={task} onChange={(e)=>{setTask(e.target.value)}} className="flex-1 min-w-0 border border-gray-300 rounded-full px-3 py-2" type="text" name="" id="" placeholder="Enter your task.." />
                
                <button onClick={addTask} className="px-6 py-2 bg-slate-700 rounded-full text-white">Add</button>
            </div>
           <hr className="my-3 text-gray-300 " />
            <ul>
                {
                    tasks.map((item)=>(
                        <li key={item.id}>{item.task}</li>
                    ))
                }
            </ul>
           
           
            </div>
            

            
        </div>
        </>
    )
}