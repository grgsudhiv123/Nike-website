import {star} from "../assets/icons"

const PopularProductCard = ({imgURL,name,price,rating}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt="shoe-img" className='w-[280px] h-[280px] max-xl:w-40 max-md:h-40'/>
        <div className='mt-5 flex justify-start gap-2.5 items-center'>
            <img src={star} alt="rating" className='w-[16px] h-[16px]'/>
            <p className='font-montserrat text-xl leading-none text-slate-gray'>({rating})</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin '>{name}</h3>
        <p className='mt-2 text-2lx leading-normal font-semibold font-montserrat text-coral-red '>{price}</p>
        
    </div>
  )
}

export default PopularProductCard;