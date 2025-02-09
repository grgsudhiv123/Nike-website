import CustomerReviews from "../components/CustomerReviews"
import {reviews} from "../constants"

const CustomerComponents = () => {
  return (
    <section className='max-w-screen-xl mx-auto '>
      <h3 className="font-palanquin text-4xl font-bold text-center">
        What Our<span className="text-coral-red"> Customers</span> Say ?
      </h3>
      <p className="info-text font-montserrat text-slate-600 text-center mt-2 mx-auto max-w-lg">Hear genuine stories from our satisfied customers about their exceprional experiences with us.</p>
      <div className="flex justify-evenly items-center max-lg:flex-col">
        {
          reviews.map((items) => (
            <CustomerReviews key={items.customerName} {...items}/>
          ))
        }
      </div>
    </section>
  )
}

export default CustomerComponents