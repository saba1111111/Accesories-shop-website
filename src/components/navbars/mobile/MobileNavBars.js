import React,{useState} from 'react'
import {AiOutlineMenu} from "react-icons/ai";
import {CgClose} from "react-icons/cg";
import {motion} from "framer-motion";
function MobileNavBars() {
    const [data,setData] = useState(false);
   
  return (
    <div className='hidden 2xl:flex' >
       <div className=' h-[100px] w-[100%]  flex justify-between items-center ' >
     <img  className='w-[300px] h-[90px] xl:w-[200px] xl:h-[80px]' src="axali-logo-1.jpg" alt="" />
      
        { !data ? <AiOutlineMenu onClick={() => setData(!data)} className='w-[50px] h-[50px] mr-[40px] xl:mr-[10px] cursor-pointer lg:w-[30px] lg:h-[30px]' /> : <CgClose onClick={() => setData(!data)} className='w-[50px] h-[50px] mr-[40px] xl:mr-[10px] cursor-pointer' /> }
     </div>
        
     {  data &&  <motion.div   initial={{ x: 250}} animate={{ x: 0}} transition={{ duration: 0.3 }}  className='w-[100%] h-[100%]  absolute top-[0px] z-20'>
       <div  className='w-[300px] h-[100%] z-20 opacity-[1] bg-white fixed top-[0px] right-[0px] flex flex-col items-end ' >
       <CgClose onClick={() => setData(!data)} className='w-[50px] h-[50px] mr-[30px] mt-[30px] cursor-pointer transition-[5s] hover:rotate-[180deg]' />
       <p onClick={() => setData(!data)} className='same'><a href="#silver">ვერცხლი</a></p>
       <div className='w-[200px] h-[2px] bg-black mt-[15px] mr-[20px]' ></div>
       <p onClick={() => setData(!data)} className='same'><a href="#contact"  >კონტაქტი</a></p>
          <div className='w-[200px] h-[2px] bg-black mt-[15px] mr-[20px]' ></div>
          <p onClick={() => setData(!data)} className='same' ><a href="#clock" >საათი</a></p><hr />
          <div className='w-[200px] h-[2px] bg-black mt-[15px] mr-[20px]' ></div>
          <p onClick={() => setData(!data)} className='same'><a href="#samajurebi" >სამაჯური</a></p><hr />
          <div className='w-[200px] h-[2px] bg-black mt-[15px] mr-[20px]' ></div>
          <p onClick={() => setData(!data)} className='same' ><a href="#ring" >ბეჭდები</a></p><hr />
          <div className='w-[200px] h-[2px] bg-black mt-[15px] mr-[20px]' ></div>
          </div>
          <div onClick={() => setData(!data)} className='fixed bg-black  h-[100%] right-[300px] w-[100%] opacity-[0.7]' > </div>
       </motion.div> 
       }
        
    </div>
  )
}

export default MobileNavBars
