import React, { useState } from "react";
import { VscCheck } from "react-icons/vsc";

export default function Task({ title ,index}) {
  const [done,setDone] = useState(false)
  const handleTask = () =>{
    setDone(!done);
    console.log(done);
  }
  return (
    <article className={`bg-gray-200	px-2 py-1 text-base		mb-3 flex	 items-center ${done !== false ? 'line-through':''} ${done !== false ? 'text-slate-600':'text-red-400'}`}>
      <h5 className='col-span-2  flex-1	' >{index +'. '}{title}</h5>
      <VscCheck className='	text-xl text-slate-900	flex-1	self-end	 ' onClick ={handleTask}/>
    </article>
  );
}
