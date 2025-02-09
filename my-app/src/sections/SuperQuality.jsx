import {shoe8} from "../assets/images"
import Buttons from "../components/Buttons"


const SuperQuality = () => {
  return (
    <section id="about-us" className='flex justify-evenly max-lg:flex-col gap-10 w-full max-w-screen-xl mx-auto px-auto'>
      <div className='flex flex-1 flex-col justify-start items-center mr-20'>
        <h2 className="mt-5 font-palanquin text-4xl font-bold capitalize tracking-wide">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'">
          We Provide You   
          </span>
          <br/>
          <span className='flex flex-1 flex-row  items-start justify-end mt-3'>
            <span className="text-coral-red inline-block ">Super Quality</span>
          </span>
          <span className=" flex flex-1 flex-row  items-start justify-end mt-3 ">Shoes</span>
        </h2>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-5 sm:max-w-sm text-justify">Ensuring premium comfort abd style, our meticulously crafted footwear is designed to elevate your experienc, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-2 mb-14 sm:max-w-sm text-justify">Step into unmatched comfort and style with our premium footwear! Crafted with precision and innovation, our shoes deliver the perfect blend of elegance, durability, and performance. Elevate your look and experience next-level comfort with every step—because you deserve the best! </p>
        <div className='flex flex-1 justify-center items-center w-full xl:w-3/5'>
          <Buttons labels="Show now"/> 
        </div>
      </div>
      <div className='bg-cover bg-center flex flex-1 justify-center items-center'>
        <img src={shoe8} alt="yezzy" className='w-fit h-100'/>
      </div>
    </section>
  )
}

export default SuperQuality