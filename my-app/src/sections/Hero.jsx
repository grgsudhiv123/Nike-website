import Buttons from "../components/Buttons"
import {arrowRight} from '../assets/icons'
import { bigShoe1 } from "../assets/images";

import { statistics } from "../constants/index"
const Hero = () => {
  return (
    <section className="w-full flex min-h-screen xl:flex-row flex-col gap-10 max-w-screen-wide mx-auto">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:whitespace-nowrap 2xl:bg-white z-10">
            The New Arrival 
          </span>
          <br/>
          <span className="text-coral-red">Nike </span>
          Shoes
        </h1>
        <p className="font-montserrat text-lg text-slate-700 leading-8 mt-6 mb-14 sm:max-w-sm">Discover new arrivals of Nike shoes, make yourself stylish and comfortable.</p>
        <Buttons labels="Show now" iconurl={arrowRight} /> 
        <div className="relative flex justify-start items-start w-full gap-16 mt-20">
          {statistics.map((stat) => (
            <div key={stat.value}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="text-slate-600 font-montserrat ">{stat.label}</p>
            </div>
          ))
          }
        </div>
      </div>
            
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40">
          <img className="object-contain relative z-0" src={bigShoe1} alt="shoe1" width={600} height={500}/>
      </div>


    </section>
  );
};

export default Hero;


