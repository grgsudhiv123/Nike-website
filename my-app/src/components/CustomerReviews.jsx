import {star} from "../assets/icons"

const CustomerReviews = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className="flex flex-1 flex-col items-center mt-16 w-full">
        <img src={imgURL} alt="customerimg" width={100} height={100} className="rounded-full"/>
        <p className="max-w-md text-center mt-5 font-palanquin text-slate-600">{feedback}</p>
        <div className="flex justify-center items-center gap-2 mt-2">
            <img src={star} alt="rating img" className="object-contain m-0 w-5 h-5"/> <span className="text-slate-600 font-montserrat">({rating})</span>
        </div>
        <h2 className="mt-5 text-2xl font-bold font-palanquin">{customerName}</h2>
    </div>
  )
}

export default CustomerReviews