import React,{useState} from 'react'
import {AiOutlineMenu} from "react-icons/ai";
import {CgClose} from "react-icons/cg";
import {ImPhone} from "react-icons/im";
import {RiMailFill} from "react-icons/ri";
import {BsLinkedin} from "react-icons/bs";
import {FaInstagramSquare} from "react-icons/fa";
import {AiFillFacebook} from "react-icons/ai";
import { motion } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';
const NormalNavBar = () => {
  const [second,setSecond] = useState(false);
  return (
    <div>
        <div className='2xl:hidden ' >
      <div className='h-[100px] w-[100%]  flex justify-between items-center ' >
     <img  className='w-[300px] h-[90px]' src="axali-logo-1.jpg" alt="" />
      <div className='flex' >
          <p className='every'><Link to="#silver">ვერცხლი</Link></p>
          <p className='every' ><Link to="#ring" >ბეჭდები</Link></p>
          <p className='every' ><Link to="#clock" >საათი</Link></p>
          <p className='every'><Link to="#samajurebi"  >სამაჯური</Link></p>
          <p className='every'><Link to="#contact"  >კონტაქტი</Link></p>
          { !second && <AiOutlineMenu onClick={() => setSecond(!second)} className='w-[25px] h-[20px] mr-[10px] mt-[2px] cursor-pointer' /> }
      </div>
     </div>
    </div>
   { second && <div className='absolute w-[100%] h-[100%]  top-[0px] flex flex-row-reverse z-20 2xl:hidden' >
         <div onClick={() => setSecond(!second)} className='fixed w-[100%] h-[100%] bg-black top-[0px] opacity-[0.6] ' ></div>
        <motion.div initial={{x: 200}} animate={{x: 0}} transition={{ duration: 0.3 }} className='fixed w-[450px] h-[100%] bg-white ' >
        <CgClose onClick={() => setSecond(!second)} className='w-[30px] h-[30px]  cursor-pointer absolute right-[0px] m-[20px] transition-[5s] hover:rotate-[180deg]' />
        <div className=' absolute top-[100px] left-[100px] h-[400px] flex flex-col justify-evenly'  >
        <h2 className='text-[20px]' >დაგვიკავშირდით</h2>
        <div>
        <div className='flex mb-[10px] items-center' >
           <ImPhone className='mr-[20px]' />
           <p>591 19 52 33</p>
        </div>
        <div className='flex items-center' >
          <RiMailFill className='mr-[20px] ' />
          <p>sabapachulia123@gmail.com</p>
        </div>
        </div>
        <div className='flex ' >
        <a rel="noreferrer" href="https://www.linkedin.com/in/saba-pachulia-2bb368229/" target="_blank"><BsLinkedin className='m-[5px] w-[20px] h-[20px] cursor-pointer' /></a>
         <a rel="noreferrer" href="https://www.instagram.com/sabapachulia1/" target="_blank"><FaInstagramSquare className='m-[5px] w-[20px] h-[20px] cursor-pointer' /></a>
         <a rel="noreferrer" href="https://www.facebook.com/pachulia.saba/" target="_blank"> <AiFillFacebook className='m-[5px] w-[23px] h-[23px] cursor-pointer' /></a>
        </div>
        </div>
        </motion.div>
    </div> }
    </div>
  )
}

export default NormalNavBar
