import {offer} from "../assets/images"
import Buttons from "../components/Buttons"
const SpecialOffer = () => {
  return (
    <section className='flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-w-screen-xl mx-auto'>
      <div className='flex-1'>
        <img src={offer} alt="offer img" width={773} height={687} className='object-contain w-full'  />
      </div>
        <div className='flex-1 w-full'>
          <div className='flex flex-col'>
            <div>
              <h1 className='font-palanquin text-4xl font-bold xl-mt-20 sm:-mt-10'><span className='text-coral-red'>Special</span> Offer</h1>
              <p className='lg:max-w-lg mt-5 font-montserrat text-slate-gray text-balanced'>Discover a seamless shopping experience with our e-commerce platform. Explore a wide range of products, from fashion and electronics to home essentials and more—all at your fingertips. Enjoy secure payments, fast delivery, and exclusive deals. Shop with confidence, backed by customer reviews and 24/7 support. Elevate your shopping experience today! </p>
              <p className='lg:max-w-lg mt-3 font-montserrat text-slate-gray text-balanced'>Join thousands of satisfied customers and enjoy a seamless, secure, and enjoyable shopping experience. Don't wait—your perfect purchase is just a click away!</p>
            </div>
            <div className='flex flex-wrap justify-start items-center gap-5 mt-6 '>
            <Buttons labels="View details"/>
            <Buttons labels="Learn more" backgroundColor="bg=white" border="border-2 border-slate-gray" textColor="text-slate-gray"/>
            </div>
          </div>
        </div>
    </section>
  )
}

export default SpecialOffer