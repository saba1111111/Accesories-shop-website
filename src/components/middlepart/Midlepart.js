import { Link } from 'react-router-dom';
import React,{useEffect,useState} from 'react'
import {GrZoomOut} from "react-icons/gr";
import {BsFillBasket2Fill} from "react-icons/bs";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import {GrLocation} from "react-icons/gr";
import {AiOutlineGift} from "react-icons/ai";
import {BiTimeFive} from "react-icons/bi";
import {ImPhone} from "react-icons/im";
import {BsLinkedin} from "react-icons/bs";
import {FaInstagramSquare} from "react-icons/fa";
import {AiFillFacebook} from "react-icons/ai";
function getWindowDimensions() {
 
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export var datas = {
   "img": "",
   "heading": "",
   "price": ""
};
    
  
function Midlepart() {
  const [data,setData] = useState();
  const [visi,setVisi] = useState(false);
  const photos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  const [img,setImg] = useState("");
  const { height, width } = useWindowDimensions();
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  const visibility = () => {
    setVisi(!visi);
  }
  const first = () => {
    datas.img = "./first.jpg";
    datas.heading = "ონიქსი – უჟანგავი ფოლადი";
    datas.price = "65.00 ₾";
  }
  const second = () => {
    datas.img = "./second.jpg";
    datas.heading = "ვეფხვის თვალი - ფოლადი";
    datas.price = "89.00 ₾";
  }
  const third = () => {
    datas.img = "./fourth.jpg";
    datas.heading = "ვერცხლი – საქართველო";
    datas.price = "45.00 ₾";
  }
  const fourth = () => {
    datas.img = "./whites.jpg";
    datas.heading = "ვერცხლი - თეთრი პითონი";
    datas.price = "495.00 ₾";
  }
  const fives = () => {
    datas.img = "./sevens.jpg";
    datas.heading = "ონიქსი – უჟანგავი ფოლადი";
    datas.price = "35.00 ₾";
  }
  const sixs = () => {
    datas.img = "./nines.jpg";
    datas.heading = "ვეფხვის თვალი - ფოლადი";
    datas.price = "22.00 ₾";
  }
  const sevens = () => {
    datas.img = "./fifth.jpg";
    datas.heading = "ვერცხლი – საქართველო";
    datas.price = "33.00 ₾";
  }
  const eights = () => {
    datas.img = "./rings.jpg";
    datas.heading = "ვერცხლის ბეჭედი";
    datas.price = "130.00 ₾";
  }
  return (
    <div>
       <div className="w-[100%] h-[500px]  flex justify-center mt-[30px] xl:h-[300px] lg:h-[200px] xl:mt-[0px]" >
           <img className=''  src="./mtavari.jpg" alt="" />
       </div>
         <br />
       <div>
         <h1 id="samajurebi" className='text-[30px] font-[500] border-b-[2px] w-[330px] mx-[auto] my-[0] border-black ' >ახალი დამატებული</h1>
         <br /><br /><br />
         <div className='max-w-[1350px] min-h-[350px]  mx-[auto] my-[0] flex flex-wrap justify-center ' >
        
          <figure   className='mx-[5px] mb-[60px] '>
            
          <img  className='w-[325px] h-[350px] bg-black border-[1px] ' src="./first.jpg" alt="" /><br />
      <Link to="/choose" >  <div onClick={first}  className='w-[325px] h-[351px] bg-black border-[1px] absolute mt-[-375px] opacity-[0] photos' >
             <div className='absolute top-[77%] left-[30%] flex' >
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1] mr-[10px]' ><BsFillBasket2Fill className='black' /></div>
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1]' ><GrZoomOut className='black' /></div>
            </div>
          </div>
          </Link>
          <figcaption className='ml-[5px]' >
            <p className='text-black font-bold text-[19px]' >ონიქსი – უჟანგავი ფოლადი</p>
            <p className='text-black font-bold text-[19px]' >65.00 ₾</p>
          </figcaption>
          </figure>
          
          <figure className='mx-[5px] mb-[60px]' >
          <img className='w-[325px] h-[350px] bg-black border-[1px] ' src="./second.jpg" alt="" /><br />
          <Link to="/choose" >  <div onClick={second}   className='w-[325px] h-[351px] bg-black border-[1px] absolute mt-[-375px] opacity-[0] photos' >
             <div className='absolute top-[77%] left-[33%] flex' >
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1] mr-[10px]' ><BsFillBasket2Fill className='black' /></div>
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1]' ><GrZoomOut className='black' /></div>
            </div>
          </div>
          </Link>
          <figcaption className='ml-[5px]' >
            <p className='text-black font-bold text-[19px]' >ვეფხვის თვალი - ფოლადი</p>
            <p className='text-black font-bold text-[19px]' >89.00 ₾</p>
          </figcaption>
          </figure>

          <figure className='mx-[5px] mb-[60px]' >
          <img className='w-[325px] h-[350px] bg-black border-[1px]' src="./fourth.jpg" alt="" /><br />
          <Link to="/choose" >  <div onClick={third} className='w-[325px] h-[351px] bg-black border-[1px] absolute mt-[-375px] opacity-[0] photos' >
             <div className='absolute top-[77%] left-[34%] flex' >
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1] mr-[10px]' ><BsFillBasket2Fill className='black' /></div>
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1]' ><GrZoomOut className='black' /></div>
            </div>
          </div>
          </Link>
          <figcaption className='ml-[5px]' >
            <p className='text-black font-bold text-[19px]' > ვერცხლი – საქართველო</p>
            <p className='text-black font-bold text-[19px]' >45.00 ₾</p>
          </figcaption>
          </figure>
      
          <figure className='mx-[5px] mb-[60px]' >
          <img className='w-[325px] h-[350px] bg-black border-[1px] ' src="./whites.jpg" alt="" /><br />
          <Link to="/choose" >  <div onClick={fourth} className='w-[325px] h-[351px] bg-black border-[1px] absolute mt-[-375px] opacity-[0] photos' >
             <div className='absolute top-[80%] left-[35%] flex' >
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1] mr-[10px]' ><BsFillBasket2Fill className='black' /></div>
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1]' ><GrZoomOut className='black' /></div>
            </div>
          </div>
          </Link>
          <figcaption className='ml-[5px]' >
            <p className='text-black font-bold text-[19px]'>ვერცხლი - თეთრი პითონი</p>
            <p className='text-black font-bold text-[19px]' >495.00 ₾</p>
          </figcaption>
          </figure>
       
          <figure id="ring" className='mx-[5px] mb-[60px]'>
          <img className='w-[325px] h-[350px] bg-black border-[1px] ' src="./sevens.jpg" alt="" /><br />
          <Link to="/choose" >  <div onClick={fives} className='w-[325px] h-[351px] bg-black border-[1px] absolute mt-[-375px] opacity-[0] photos' >
             <div className='absolute top-[77%] left-[30%] flex' >
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1] mr-[10px]' ><BsFillBasket2Fill className='black' /></div>
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1]' ><GrZoomOut className='black' /></div>
            </div>
          </div>
          </Link>
          <figcaption className='ml-[5px]' >
            <p className='text-black font-bold text-[19px]' >ონიქსი – უჟანგავი ფოლადი</p>
            <p className='text-black font-bold text-[19px]' >35.00 ₾</p>
          </figcaption>
          </figure>
          
          <figure className='mx-[5px] mb-[60px]' >
          <img className='w-[325px] h-[350px] bg-black border-[1px] ' src="./nines.jpg" alt="" /><br />
          <Link to="/choose" >  <div onClick={sixs}  className='w-[325px] h-[351px] bg-black border-[1px] absolute mt-[-375px] opacity-[0] photos' >
             <div className='absolute top-[77%] left-[34%] flex' >
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1] mr-[10px]' ><BsFillBasket2Fill className='black' /></div>
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1]' ><GrZoomOut className='black' /></div>
            </div>
          </div>
          </Link>
          <figcaption className='ml-[5px]' >
            <p className='text-black font-bold text-[19px]' >ვეფხვის თვალი - ფოლადი</p>
            <p className='text-black font-bold text-[19px]' >22.00 ₾</p>
          </figcaption>
          </figure>

          <figure className='mx-[5px] mb-[60px]' >
          <img className='w-[325px] h-[350px] bg-black border-[1px]' src="./fifth.jpg" alt="" /><br />
          <Link to="/choose" >  <div onClick={sevens}  className='w-[325px] h-[351px] bg-black border-[1px] absolute mt-[-375px] opacity-[0] photos' >
             <div className='absolute top-[77%] left-[34%] flex' >
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1] mr-[10px]' ><BsFillBasket2Fill className='black' /></div>
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1]' ><GrZoomOut className='black' /></div>
            </div>
          </div>
          </Link>
          <figcaption className='ml-[5px]' >
            <p className='text-black font-bold text-[19px]' > ვერცხლი – საქართველო</p>
            <p className='text-black font-bold text-[19px]' >33.00 ₾</p>
          </figcaption>
          </figure>
      
          <figure className='mx-[5px] mb-[60px]' >
          <img className='w-[325px] h-[350px] bg-black border-[1px] ' src="./rings.jpg" alt="" /><br />
          <Link to="/choose" >  <div onClick={eights}  className='w-[325px] h-[351px] bg-black border-[1px] absolute mt-[-375px] opacity-[0] photos' >
             <div className='absolute top-[77%] left-[34%] flex' >
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1] mr-[10px]' ><BsFillBasket2Fill className='black' /></div>
            <div className='w-[50px] h-[50px] bg-white  grid place-content-center cursor-pointer opacity-[1]' ><GrZoomOut className='black' /></div>
            </div>
          </div>
          </Link>
          <figcaption className='ml-[5px]' >
            <p className='text-black font-bold text-[19px]' > ვერცხლის ბეჭედი  </p>
            <p className='text-black font-bold text-[19px]' >130.00 ₾</p>
          </figcaption>
          </figure>

         </div>

           
       </div>
         
       <li onClick={scrollToTop}   > <Link to="/seemore" ><h1 className='cursor-pointer text-center mb-[80px] mt-[20px] text-[20px] border-b-2 w-[300px] mx-[auto] border-black' >Click here to View More Products</h1></Link></li>

       <h1 id="clock" className='text-[30px] font-[500] border-b-[2px] w-[330px] mx-[auto] my-[70px] border-black '>ყველაზე გაყიდვადი</h1>
      <div className='mt-[100px] flex border-none md:flex-col border-[2px] md:-mt-[150px]' >
        <div className='w-[50%] h-[550px]    grid place-content-center md:w-[100%]' >
        <h1 className='text-[30px] font-bold border-y-[2px] p-[15px] w-[47vw] text-center min-w-[400px]' >სამაჯურები / Braclets</h1>
        </div>
        <div className='w-[45%] h-[550px]   flex  shadow md:w-[80%] md:mx-[auto] md:my-[0] md:-mt-[180px] sm:w-[100%] sm:h-[501px]' >
         <div className='w-[15%] h-[100%] bg-black opacity-[0] shados' ></div> 
         <img className='w-[70%] h-[549px] sm:h-[500px]' src="./clockmen.jpg" alt="" /> 
         <div className='w-[15%] h-[100%] bg-black opacity-[0] shados' ></div> 
        </div>
      </div>
         
      <div className='mt-[100px] flex flex-row-reverse border-none md:flex-col border-[2px] md:-mt-[120px]' >
        <div className='w-[50%] h-[550px]    grid place-content-center md:w-[100%]' >
        <h1 className='text-[30px] font-bold border-y-[2px] p-[15px] w-[47vw] text-center min-w-[400px]' >ბორჯღალო / silver</h1>
        </div>
        <div className='w-[45%] h-[550px] flex shadow md:w-[80%] md:mx-[auto] md:my-[0] md:-mt-[180px] sm:w-[100%] sm:h-[451px]' >
         <div className='w-[15%] h-[100%] bg-black opacity-[0] shados' ></div> 
         <img className='w-[70%] h-[549px] sm:h-[450px]' src="./tyavi.jpg" alt="" /> 
         <div className='w-[15%] h-[100%] bg-black opacity-[0] shados' ></div> 
        </div>
      </div>


      <h1 id="silver" className='text-[30px] font-[500] border-b-[2px] w-[390px] mx-[auto] mt-[150px] border-black '>ყველაზე პოპულარული</h1>
      <Swiper
      
      modules={[Navigation, EffectFade]}
      navigation
      //  effect={""}
     speed={1000}
     slidesPerView={width > 1200 ? 4 : width > 850 ? 3 : width > 600 ? 2 : 1}
     loop
     className="myswiper"
     >
     
     {photos.map((a,i) => 
           <SwiperSlide key={i} className="swiperslide">
           <img  src={`./photo-${a.toString()}.jpg`} alt="" />
           </SwiperSlide> 
       )}
    
    </Swiper>
    
       <div id="contact" className='w-[100%]  flex justify-evenly mt-[100px] flex-wrap' >
         <div className='flex flex-col  items-center mx-[20px] mt-[50px]' >
           <GrLocation className='w-[40px] h-[40px]' /><br />
           <p className="" ><span className='font-bold' > ჩვენი მაღაზიის მისამართი</span><br />
       გალერია თბილისი, I სართული</p>
         </div>
         <div className='flex flex-col  items-center mx-[20px] mt-[50px]' >
           <AiOutlineGift className='w-[40px] h-[40px]' /><br />
          <p className='font-bold' >სასაჩუქრე შეფუთვა</p> 
          <ul className='flex flex-col  items-center'>
            <li>მუყაოს ჩანთა, ნაჭრის <br /> ტომარა – უფასოა</li>
            <li>უფასოა მუყაოს ყუთი,<br /> მუყაოს ჩანთა – 15 ლარი</li>
            <li>ხის ყუთი, მუყაოს ჩანთა<br /> –  25  ლარი</li>
          </ul>
         </div>
         <div className='flex flex-col  items-center mx-[20px] mt-[50px]' >
           <BiTimeFive className='w-[40px] h-[40px]' /><br />
         <p className='font-bold' >24 საათიანი მომსახურება</p>
         <ul className='flex flex-col  items-center' >
           <li>შესაკვეთად მოგვწერეთ ფეისბუქის <br />
              და ინსტაგრამის გვერდზე, ან <br />
               დაგვიკავშირდით  ტელეფონის ნომერზე</li>
         </ul>
         </div>
         <div className='flex flex-col  items-center mx-[20px] mt-[50px]' >
           <ImPhone className='w-[40px] h-[40px]' /><br />
           <p>+995 597 10 10 85<br />
+995 555 57 92 92</p>
         </div>
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

export default Midlepart
 