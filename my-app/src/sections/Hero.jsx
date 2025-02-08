import Buttons from "../components/Buttons"
import {arrowRight} from '../assets/icons'
import { bigShoe1, thumbnailbg } from "../assets/images"
import {shoes} from "../constants/index"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"

import { statistics } from "../constants/index"
const Hero = () => {


  // new comment

  const [currentShoe, setCurrentShoe] = useState(bigShoe1)
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold tracking-wide">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'">
            The  New  Arrival 
          </span>
          <br/>
            <span className="text-coral-red inline-block mt-3 ">Nike</span>
            <span>  Shoes</span>

        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover new arrivals of Nike shoes, make yourself 
          stylish and comfortable.</p>
        <Buttons labels="Show now" iconurl={arrowRight} /> 
        <div className="relative flex justify-start items-start flex-wrap w-full gap-16 mt-20">
          {statistics.map((stat) => (
            <div key={stat.value}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="text-slate-600 font-montserrat leading-7 ">{stat.label}</p>
            </div>
          ))
          }
        </div>
      </div>
            
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center" style={{ backgroundImage: `url(${currentShoe})`}}>
      {/* Background Overlay with Blur Effect */}
      <div className="absolute inset-0 backdrop-blur-md"></div>

      {/* Foreground Image */}
      <img className="object-contain relative z-10" src={currentShoe} alt="shoe1" width={600} height={500}/>

      <div className="absolute flex gap-10 -bottom-[6%] z-20">
          {
            shoes.map((jutta)=>(
              <div key={jutta}>
                  <ShoeCard imgUrl={jutta} changeBigShoe={(jutta)=>setCurrentShoe(jutta)} bigShoeImg={currentShoe}/>
              </div>
            ))
          }
      </div>
      </div>
    </section>
  );
};

export default Hero;


