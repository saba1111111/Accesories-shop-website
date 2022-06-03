import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {BsLinkedin} from "react-icons/bs";
import {FaInstagramSquare} from "react-icons/fa";
import {AiFillFacebook} from "react-icons/ai";
import { datas } from '../middlepart/Midlepart';
function ChooseThing() {
    const [damateba,setDamateba] = useState(1);
   
    const minus = () => {
      if(damateba > 1) {
          setDamateba(damateba - 1);
      }else{
          setDamateba(damateba);
      }
    }
  return (
    <div className='w-[100%] h-[100%] bg-[#bdc3c7]  absolute choose' > 
    <Link to="/" ><h1 className='my-[20px] mx-[10px] cursor-pointer border-[1px] w-[160px] border-black p-[7px] rounded-[10px] bg-black text-white opacity-[0.9] text-center' >უკან დაბრუნება</h1></Link>
     
      <div className='bg-[#bdc3c7] ' >
      <div  className='max-w-[700px] min-h-[500px] bg-white mx-[auto] mt-[50px] flex choose-1' >
          <div className='w-[50%] min-h-[500px] border-[1px] flex flex-col justify-center items-center choose-2'  >
       <img className='w-[80%] h-[250px] min-w-[220px] border-[1px] ' src={`${datas.img}`} alt="" />
       </div>

       <div className='w-[50%] min-h-[500px] flex flex-col justify-center ml-[10px] choose-3' >
        <h1 className='text-black font-bold text-[20px]' >{datas.heading}</h1>
        <h2 className='ml-[20px] my-[10px]' >{datas.price}</h2>
        <ul className="text-black" >
            <li>▪ ქვები: ონიქსი</li>
            <li>▪ საქართველო: უჟანგავი ფოლადი 316</li>
            <li>▪ ქვები: ონიქსი</li>
            <li>▪ ქვები: ონიქსი</li>
            <li>▪ ქვები: ონიქსი</li>
        </ul>
        <div className='flex items-center mt-[20px]' >
        <div className='w-[80px] h-[50px] border-[1px] flex justify-center items-center m-[10px]' >
            <p onClick={minus} className='text-[35px] cursor-pointer' >-</p>
            <p className='mx-[10px] text-[25px]' >{damateba}</p>
            <p onClick={() => setDamateba(damateba + 1)} className='text-[30px] cursor-pointer' >+</p>
        </div>
        <p className='w-[200px] h-[50px] bg-black text-white flex items-center justify-center text-center rounded-[15px] cursor-pointer ml-[10px]' >კალათაში დამატება</p>
        </div>
        <p className='mt-[15px]' >კატეგორია: სამაჯურები</p>

        <div className='flex mt-[100px] choose-4' >
        <a href="https://www.linkedin.com/in/saba-pachulia-2bb368229/" target="_blank"><BsLinkedin className='m-[5px] w-[20px] h-[20px] cursor-pointer' /></a>
         <a href="https://www.instagram.com/sabapachulia1/" target="_blank"><FaInstagramSquare className='m-[5px] w-[20px] h-[20px] cursor-pointer' /></a>
         <a href="https://www.facebook.com/pachulia.saba/" target="_blank"> <AiFillFacebook className='m-[5px] w-[23px] h-[23px] cursor-pointer' /></a>
        </div>
       </div>
         
      </div>
      </div>
    </div>

  )
}

export default ChooseThing
