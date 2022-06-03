import React from 'react'
import { Link } from 'react-router-dom';
import {GrZoomOut} from "react-icons/gr";
import {BsFillBasket2Fill} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {FaInstagramSquare} from "react-icons/fa";
import {AiFillFacebook} from "react-icons/ai";
function MoreThings() {
  return (
    <div>
       <Link to="/" ><h1 className='my-[20px] mx-[10px] cursor-pointer border-[1px] w-[160px] border-black p-[7px] rounded-[10px] bg-black text-white opacity-[0.9] text-center' >უკან დაბრუნება</h1></Link>
     <h1 id="sworad" className='text-[30px] font-[500] border-y-[2px] text-center  mx-[auto] mt-[20px] border-black '>აირჩიე შენი ფავორიტი სამაჯური</h1>
    
     <div className='max-w-[1350px] min-h-[350px]  mx-[auto] mt-[100px] flex flex-wrap justify-center ' >
          {/* <div className='max-w-[300px] h-[350px] bg-black ' ></div> */}
          <figure className='mx-[5px] mb-[60px] '>
          <img className='w-[325px] h-[350px] bg-black border-[1px] ' src="./photo-1.jpg" alt="" /><br />
          <div className='w-[325px] h-[351px] bg-black border-[1px] absolute mt-[-375px] opacity-[0] photos' >
             <div className='absolute top-[77%] left-[30%] flex' >
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1] mr-[10px]' ><BsFillBasket2Fill className='black' /></div>
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1]' ><GrZoomOut className='black' /></div>
            </div>
          </div>
          <figcaption className='ml-[5px]' >
            <p className='text-black font-bold text-[19px]' >ონიქსი – უჟანგავი ფოლადი</p>
            <p className='text-black font-bold text-[19px]' >65.00 ₾</p>
          </figcaption>
          </figure>
          
          <figure className='mx-[5px] mb-[60px]' >
          <img className='w-[325px] h-[350px] bg-black border-[1px] ' src="./photo-2.jpg" alt="" /><br />
          <div className='w-[325px] h-[351px] bg-black border-[1px] absolute mt-[-375px] opacity-[0] photos' >
             <div className='absolute top-[77%] left-[33%] flex' >
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1] mr-[10px]' ><BsFillBasket2Fill className='black' /></div>
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1]' ><GrZoomOut className='black' /></div>
            </div>
          </div>
          <figcaption className='ml-[5px]' >
            <p className='text-black font-bold text-[19px]' >ვეფხვის თვალი - ფოლადი</p>
            <p className='text-black font-bold text-[19px]' >75.00 ₾</p>
          </figcaption>
          </figure>

          <figure className='mx-[5px] mb-[60px]' >
          <img className='w-[325px] h-[350px] bg-black border-[1px]' src="./photo-3.jpg" alt="" /><br />
          <div className='w-[325px] h-[351px] bg-black border-[1px] absolute mt-[-375px] opacity-[0] photos' >
             <div className='absolute top-[77%] left-[34%] flex' >
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1] mr-[10px]' ><BsFillBasket2Fill className='black' /></div>
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1]' ><GrZoomOut className='black' /></div>
            </div>
          </div>
          <figcaption className='ml-[5px]' >
            <p className='text-black font-bold text-[19px]' > ვერცხლი – საქართველო</p>
            <p className='text-black font-bold text-[19px]' >65.00 ₾</p>
          </figcaption>
          </figure>
      
          <figure className='mx-[5px] mb-[60px]' >
          <img className='w-[325px] h-[350px] bg-black border-[1px] ' src="./photo-4.jpg" alt="" /><br />
          <div className='w-[325px] h-[351px] bg-black border-[1px] absolute mt-[-375px] opacity-[0] photos' >
             <div className='absolute top-[80%] left-[35%] flex' >
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1] mr-[10px]' ><BsFillBasket2Fill className='black' /></div>
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1]' ><GrZoomOut className='black' /></div>
            </div>
          </div>
          <figcaption className='ml-[5px]' >
            <p className='text-black font-bold text-[19px]'>ვერცხლი - თეთრი პითონი</p>
            <p className='text-black font-bold text-[19px]' >495.00 ₾</p>
          </figcaption>
          </figure>
       
          <figure className='mx-[5px] mb-[60px]'>
          <img className='w-[325px] h-[350px] bg-black border-[1px] ' src="./photo-5.jpg" alt="" /><br />
          <div className='w-[325px] h-[351px] bg-black border-[1px] absolute mt-[-375px] opacity-[0] photos' >
             <div className='absolute top-[77%] left-[30%] flex' >
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1] mr-[10px]' ><BsFillBasket2Fill className='black' /></div>
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1]' ><GrZoomOut className='black' /></div>
            </div>
          </div>
          <figcaption className='ml-[5px]' >
            <p className='text-black font-bold text-[19px]' >ონიქსი – უჟანგავი ფოლადი</p>
            <p className='text-black font-bold text-[19px]' >65.00 ₾</p>
          </figcaption>
          </figure>
          
          <figure className='mx-[5px] mb-[60px]' >
          <img className='w-[325px] h-[350px] bg-black border-[1px] ' src="./photo-6.jpg" alt="" /><br />
          <div className='w-[325px] h-[351px] bg-black border-[1px] absolute mt-[-375px] opacity-[0] photos' >
             <div className='absolute top-[77%] left-[34%] flex' >
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1] mr-[10px]' ><BsFillBasket2Fill className='black' /></div>
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1]' ><GrZoomOut className='black' /></div>
            </div>
          </div>
          <figcaption className='ml-[5px]' >
            <p className='text-black font-bold text-[19px]' >ვეფხვის თვალი - ფოლადი</p>
            <p className='text-black font-bold text-[19px]' >75.00 ₾</p>
          </figcaption>
          </figure>

          <figure className='mx-[5px] mb-[60px]' >
          <img className='w-[325px] h-[350px] bg-black border-[1px]' src="./photo-7.jpg" alt="" /><br />
          <div className='w-[325px] h-[351px] bg-black border-[1px] absolute mt-[-375px] opacity-[0] photos' >
             <div className='absolute top-[77%] left-[34%] flex' >
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1] mr-[10px]' ><BsFillBasket2Fill className='black' /></div>
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1]' ><GrZoomOut className='black' /></div>
            </div>
          </div>
          <figcaption className='ml-[5px]' >
            <p className='text-black font-bold text-[19px]' > ვერცხლი – საქართველო</p>
            <p className='text-black font-bold text-[19px]' >65.00 ₾</p>
          </figcaption>
          </figure>
      
          <figure className='mx-[5px] mb-[60px]' >
          <img className='w-[325px] h-[350px] bg-black border-[1px] ' src="./photo-8.jpg" alt="" /><br />
          <div className='w-[325px] h-[351px] bg-black border-[1px] absolute mt-[-375px] opacity-[0] photos' >
             <div className='absolute top-[77%] left-[34%] flex' >
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1] mr-[10px]' ><BsFillBasket2Fill className='black' /></div>
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1]' ><GrZoomOut className='black' /></div>
            </div>
          </div>
          <figcaption className='ml-[5px]' >
            <p className='text-black font-bold text-[19px]' > ვერცხლის ბეჭედი  </p>
            <p className='text-black font-bold text-[19px]' >130.00 ₾</p>
          </figcaption>
          </figure>
            
          <figure className='mx-[5px] mb-[60px] '>
          <img className='w-[325px] h-[350px] bg-black border-[1px] ' src="./first.jpg" alt="" /><br />
          <div className='w-[325px] h-[351px] bg-black border-[1px] absolute mt-[-375px] opacity-[0] photos' >
             <div className='absolute top-[77%] left-[30%] flex' >
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1] mr-[10px]' ><BsFillBasket2Fill className='black' /></div>
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1]' ><GrZoomOut className='black' /></div>
            </div>
          </div>
          <figcaption className='ml-[5px]' >
            <p className='text-black font-bold text-[19px]' >ონიქსი – უჟანგავი ფოლადი</p>
            <p className='text-black font-bold text-[19px]' >65.00 ₾</p>
          </figcaption>
          </figure>
          
          <figure className='mx-[5px] mb-[60px]' >
          <img className='w-[325px] h-[350px] bg-black border-[1px] ' src="./second.jpg" alt="" /><br />
          <div className='w-[325px] h-[351px] bg-black border-[1px] absolute mt-[-375px] opacity-[0] photos' >
             <div className='absolute top-[77%] left-[33%] flex' >
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1] mr-[10px]' ><BsFillBasket2Fill className='black' /></div>
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1]' ><GrZoomOut className='black' /></div>
            </div>
          </div>
          <figcaption className='ml-[5px]' >
            <p className='text-black font-bold text-[19px]' >ვეფხვის თვალი - ფოლადი</p>
            <p className='text-black font-bold text-[19px]' >75.00 ₾</p>
          </figcaption>
          </figure>

          <figure className='mx-[5px] mb-[60px]' >
          <img className='w-[325px] h-[350px] bg-black border-[1px]' src="./fourth.jpg" alt="" /><br />
          <div className='w-[325px] h-[351px] bg-black border-[1px] absolute mt-[-375px] opacity-[0] photos' >
             <div className='absolute top-[77%] left-[34%] flex' >
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1] mr-[10px]' ><BsFillBasket2Fill className='black' /></div>
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1]' ><GrZoomOut className='black' /></div>
            </div>
          </div>
          <figcaption className='ml-[5px]' >
            <p className='text-black font-bold text-[19px]' > ვერცხლი – საქართველო</p>
            <p className='text-black font-bold text-[19px]' >65.00 ₾</p>
          </figcaption>
          </figure>
      
          <figure className='mx-[5px] mb-[60px]' >
          <img className='w-[325px] h-[350px] bg-black border-[1px] ' src="./whites.jpg" alt="" /><br />
          <div className='w-[325px] h-[351px] bg-black border-[1px] absolute mt-[-375px] opacity-[0] photos' >
             <div className='absolute top-[80%] left-[35%] flex' >
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1] mr-[10px]' ><BsFillBasket2Fill className='black' /></div>
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1]' ><GrZoomOut className='black' /></div>
            </div>
          </div>
          <figcaption className='ml-[5px]' >
            <p className='text-black font-bold text-[19px]'>ვერცხლი - თეთრი პითონი</p>
            <p className='text-black font-bold text-[19px]' >495.00 ₾</p>
          </figcaption>
          </figure>
       
          <figure className='mx-[5px] mb-[60px]'>
          <img className='w-[325px] h-[350px] bg-black border-[1px] ' src="./sevens.jpg" alt="" /><br />
          <div className='w-[325px] h-[351px] bg-black border-[1px] absolute mt-[-375px] opacity-[0] photos' >
             <div className='absolute top-[77%] left-[30%] flex' >
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1] mr-[10px]' ><BsFillBasket2Fill className='black' /></div>
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1]' ><GrZoomOut className='black' /></div>
            </div>
          </div>
          <figcaption className='ml-[5px]' >
            <p className='text-black font-bold text-[19px]' >ონიქსი – უჟანგავი ფოლადი</p>
            <p className='text-black font-bold text-[19px]' >65.00 ₾</p>
          </figcaption>
          </figure>
          
          <figure className='mx-[5px] mb-[60px]' >
          <img className='w-[325px] h-[350px] bg-black border-[1px] ' src="./nines.jpg" alt="" /><br />
          <div className='w-[325px] h-[351px] bg-black border-[1px] absolute mt-[-375px] opacity-[0] photos' >
             <div className='absolute top-[77%] left-[34%] flex' >
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1] mr-[10px]' ><BsFillBasket2Fill className='black' /></div>
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1]' ><GrZoomOut className='black' /></div>
            </div>
          </div>
          <figcaption className='ml-[5px]' >
            <p className='text-black font-bold text-[19px]' >ვეფხვის თვალი - ფოლადი</p>
            <p className='text-black font-bold text-[19px]' >75.00 ₾</p>
          </figcaption>
          </figure>

          <figure className='mx-[5px] mb-[60px]' >
          <img className='w-[325px] h-[350px] bg-black border-[1px]' src="./fifth.jpg" alt="" /><br />
          <div className='w-[325px] h-[351px] bg-black border-[1px] absolute mt-[-375px] opacity-[0] photos' >
             <div className='absolute top-[77%] left-[34%] flex' >
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1] mr-[10px]' ><BsFillBasket2Fill className='black' /></div>
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1]' ><GrZoomOut className='black' /></div>
            </div>
          </div>
          <figcaption className='ml-[5px]' >
            <p className='text-black font-bold text-[19px]' > ვერცხლი – საქართველო</p>
            <p className='text-black font-bold text-[19px]' >65.00 ₾</p>
          </figcaption>
          </figure>
      
          <figure className='mx-[5px] mb-[60px]' >
          <img className='w-[325px] h-[350px] bg-black border-[1px] ' src="./rings.jpg" alt="" /><br />
          <div className='w-[325px] h-[351px] bg-black border-[1px] absolute mt-[-375px] opacity-[0] photos' >
             <div className='absolute top-[77%] left-[34%] flex' >
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1] mr-[10px]' ><BsFillBasket2Fill className='black' /></div>
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1]' ><GrZoomOut className='black' /></div>
            </div>
          </div>
          <figcaption className='ml-[5px]' >
            <p className='text-black font-bold text-[19px]' > ვერცხლის ბეჭედი  </p>
            <p className='text-black font-bold text-[19px]' >130.00 ₾</p>
          </figcaption>
          </figure>

         </div>
      

         <div className='flex justify-between mb-[-25px]' >
       <div className='flex  mt-[80px] ml-[50px]' >
        <a href="https://www.linkedin.com/in/saba-pachulia-2bb368229/" target="_blank"><BsLinkedin className='m-[5px] w-[30px] h-[30px] cursor-pointer' /></a>
         <a href="https://www.instagram.com/sabapachulia1/" target="_blank"><FaInstagramSquare className='m-[5px] w-[30px] h-[30px] cursor-pointer' /></a>
         <a href="https://www.facebook.com/pachulia.saba/" target="_blank"> <AiFillFacebook className='m-[5px] w-[33px] h-[33px] cursor-pointer' /></a>
        </div>
        <img className='w-[150px] h-[70px]  right-[30px] mt-[60px] mr-[20px]' src="./axali-logo-1.jpg" alt="" />
       </div>
       <br />
    </div>
  )
}

export default MoreThings
