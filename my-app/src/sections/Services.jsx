import { services } from "../constants"

import ServicesComponent from "../components/ServicesComponent"

const Services = () => {
  // console.log(services)
  return (
    <section>
      <div className='flex gap-10 justify-center flex-wrap max-w-screen-xl mx-auto'>
        {
          services.map((items) => (
            <ServicesComponent key={items.label} {...items}/>
          ))
        }
      </div>
    </section>
  )
}

export default Services



