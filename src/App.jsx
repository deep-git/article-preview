import React, {useState} from "react";
import './App.css';

function App() {

  const [hoverShow, setHoverShow] = useState(false);

  return (
    <div className="bg-light_grayishblue w-full min-h-screen flex items-center justify-center font-manrope">
      
      <main className="main-card flex flex-col w-[88%] lg:flex-row lg:h-[275px] lg:w-[720px] relative">
        <div className="relative lg:w-[275px]">
          <img src="/article-preview/drawers.jpg" alt="Drawers" className="object-cover rounded-tl-xl rounded-tr-xl w-full h-[200px] lg:h-full lg:object-left lg:rounded-bl-xl lg:rounded-tr-none"/>
        </div>

        <section className="px-9 pt-7 pb-5 bg-white rounded-bl-xl rounded-br-xl lg:w-[450px] lg:pt-5 lg:px-12 lg:rounded-bl-none lg:rounded-tr-xl">
          <h1 className="text-verydark_grayishblue mt-2 font-bold lg:text-xl">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>

          <p className="mt-[12px] text-[0.83rem] text-desaturated_darkblue">Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>

          <div className="flex justify-between items-center mt-9 lg:mt-5">
            <div className="flex items-center">

              <img src="/article-preview/avatar-michelle.jpg" alt="Profile Image" className="w-10 h-10 rounded-full"/>

              <div className="ml-4">
                <p className="text-verydark_grayishblue font-bold text-sm">Michelle Appleton</p>
                <p className="text-grayish_blue text-sm font-[500]">28 Jun 2020</p>
              </div>
            </div>

            <div className="lg:relative w-max">        
              {hoverShow && (
                 <div className="hover-container absolute w-full left-0 lg:-left-[110px] lg:-top-[80px] flex flex-col items-center lg:w-max">

                  <div className="flex bg-verydark_grayishblue px-10 py-5 gap-3 w-full h-[70px] lg:py-4 lg:gap-4 rounded-bl-lg rounded-br-lg lg:rounded-lg lg:h-auto">
                    <p className="uppercase tracking-[5px] text-[13px] text-grayish_blue">Share</p>
                    <img src="/article-preview/icon-facebook.svg" alt="Facebook" className="object-contain w-5 h-5"/>
                    <img src="/article-preview/icon-twitter.svg" alt="Twitter" className="object-contain w-5 h-5"/>
                    <img src="/article-preview/icon-pinterest.svg" alt="Pinterest" className="object-contain w-5 h-5"/>
                  </div>

                  <div className="w-4 h-4 bg-verydark_grayishblue rotate-45 absolute -bottom-2 hidden lg:flex"/>
                </div>
              )}

              <div onClick={() => setHoverShow(prev => !prev)} className={`${hoverShow ? 'bg-desaturated_darkblue' : 'bg-light_grayishblue'} p-2 rounded-full w-max absolute lg:relative bottom-6 right-8 lg:bottom-0 lg:right-0`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`${hoverShow ? 'fill-current text-white' : 'fill-current text-desaturated_darkblue'} w-4 h-4`}>
                  <path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/>
                </svg>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App;
