import { products } from '../constants'
import PopularProductCard from "../components/PopularProductCard"
const PopularProducts = () => {
  return (
    <section id="products">
      <div className='max-w-screen-xl mx-auto max-sm:mt-12 '>
        <div className='flex flex-col justify-start gap-5'> 
          <h2 className='font-palanquin text-4xl font-bold'>Our <span className='text-coral-red'>Popular</span> Products</h2>
          <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Experience the perfect blend of quality and innovation,<br />discover a product designed to enhance your life. Try it today and feel the difference!</p>
          <div className='mt-16 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1'>
            {
              products.map((item)=>(
                  <PopularProductCard key={item.name} {...item}/>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularProducts