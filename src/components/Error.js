import React from 'react'
import {Link} from "react-router-dom";
function Error() {
  return (
    <div className='w-[100%] h-[100%] flex justify-center items-center mt-[100px] sm:flex-col text-center' >
      
      <h1  className='text-black font-bold text-[25px] border-b-[2px] mr-[50px] ml-[10px]' >Somthing is wrong !</h1>
      <Link to="/" ><h1 className='my-[20px] mx-[10px] cursor-pointer border-[1px] w-[160px] border-black p-[7px] rounded-[10px] bg-black text-white opacity-[0.9] text-center' >უკან დაბრუნება</h1></Link>

    </div>
  )
}

export default Error
