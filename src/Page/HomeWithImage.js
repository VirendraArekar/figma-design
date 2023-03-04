import React,{useSate, useEffect, useState} from "react";
import {BsSearch} from 'react-icons/bs';
import BgImg from '../assets/images/bg-image.jpg';
import CapImg from '../assets/images/cap.png';
import {FiArrowRight} from 'react-icons/fi';
import NavImg from '../assets/images/nav image.png';
import MogaliImg from '../assets/images/mogali.jpg';
import MickyImg from '../assets/images/micky.png';
import PumaImg from '../assets/images/puma.png';

const HomeWithImage = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);
    const [frameImg, setFrameImg] = useState(CapImg);

    const [imgArr, setImgArr] = useState([
        CapImg,
        MickyImg,
        MogaliImg,
        PumaImg
    ])
    
  return (
    <div className="h-100">
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#8E7E7E] bg-[url('../assets/images/nav image.png')]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start px-24 pt-1">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              Tip For the Trip
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <button
                  className="px-8 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  onClick={() => { setToggleSearch(!toggleSearch)}}
                >
                  <BsSearch className="text-lg" />
                </button>
              </li>
              <li className="nav-item">
                <a
                  className="px-8 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-8 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">History</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-8 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Store</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-8 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">News</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-8 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Login</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full">
           <ul className="flex float-right flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item mx-16 my-1">
                {
                    toggleSearch &&
                    <input type="text" placeholder="Search" className="px-2 placeholder-black" />
                }
              </li>
            </ul>
            
        </div>
      </nav>
      <div className="h-100 pt-16  pb-2 px-8" style={{backgroundImage : `url(${BgImg})`}}>
        <div class="grid grid-cols-4 gap-8">
            <div className="bg-[#D9D9D9] h-96 grid place-items-center">
               <img src={frameImg} />
            </div>
            <div className="col-span-2  h-96">
              <div className="bg-[#D9D9D9] h-28">

              </div>

              <div className=" h-40">
                 <div className="text-black font-bold py-2 px-4">$19.99</div>
                 <div className="py-2 px-4">
                    <button class="bg-yellow-50 hover:bg-yellow-100 text-black py-1 px-4 rounded-lg text-xs">
                       Add To Cart
                    </button>

                    <button class="bg-yellow-50 hover:bg-yellow-100 text-black py-1 px-4 rounded-lg text-xs mx-4">
                       Add To Favorite
                    </button>
                 </div>
              </div>

              <div className="bg-[#D9D9D9] h-28">
                
              </div>
            </div>
            <div className="bg-[#D9D9D9] h-96 px-8 p-6">
               <h1  className="text-center font-bold">Related Items</h1>
               <div className="h-20 bg-[#C7B4B4] my-6">
                         
               </div>

               <div className="h-20 bg-[#C7B4B4] my-6">
                         
               </div>

               <div className="h-20 bg-[#C7B4B4] my-6">
                         
               </div>
            </div>
        </div>

        <div class="grid grid-cols-4 gap-8 my-4">
            <div className=" h-12 grid place-items-center">
               <div class="grid grid-cols-5 gap-8">
                  <div className="h-8 w-8"></div>
                  <div className="bg-[#D9D9D9] h-8 w-8 cursor-pointer" onClick={() => setFrameImg(MickyImg)}></div>
                  <div className="bg-[#D9D9D9] h-8 w-8 cursor-pointer" onClick={() => setFrameImg(PumaImg)}></div>
                  <div className="bg-[#D9D9D9] h-8 w-8 cursor-pointer" onClick={() => setFrameImg(MogaliImg)}></div>
                  <div className="h-8 w-8">
                     <FiArrowRight className="text-[#D9D9D9] text-2xl cursor-pointer" onClick={() => {
                        setFrameImg(imgArr[Math.floor(Math.random() * imgArr.length)]);
                     }}/>
                  </div>
                </div>
            </div>

            <div className="bg-[#D9D9D9] h-28 grid place-items-center col-span-3">
                <h1 className="text-center font-bold h-2">Reviews</h1>
               <div class="grid grid-cols-3 gap-28">
                 <div className="bg-[#C7B4B4] mx-2 my-4 h-16 w-64 mb-2">
                 </div>
                 <div className="bg-[#C7B4B4] mx-2 my-4 h-16 mb-2">

                 </div>
                 <div className="bg-[#C7B4B4] mx-2 my-4 h-16 mb-2">

                 </div>
               </div>   
            </div>
        </div>
      </div>
      <div className="w-screen bg-[#8E7E7E] h-12">
          <div class="grid grid-cols-3 gap-8">
            <div className="text-center text-white my-3 text-xs">TipForTheTrip</div>
            <div className="text-center text-white my-3 mx-40">
                <div class="grid grid-cols-3 gap-2">
                   <div class="w-6 h-6 bg-[#DEDF94] rounded-full" ></div>
                   <div class="w-6 h-6 bg-[#DEDF94] rounded-full"></div>
                   <div class="w-6 h-6 bg-[#DEDF94] rounded-full"></div>
                </div>
            </div>
            <div className="text-center text-white my-3 text-xs">Contact Us Here</div>
          </div>
      </div>
    </div>
  );
}


export default HomeWithImage;