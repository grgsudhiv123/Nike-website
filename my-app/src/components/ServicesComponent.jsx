
const ServicesComponent = (imgURL) => {
  // console.log(imgURL)
  // console.log(label)
  // console.log(subtext)

  return (
    <div className='flex-1 rounded-[20px] w-full shadow-3xl px-10 py-8'>
        <div className='w-11 h-11 flex bg-coral-red rounded-full justify-center items-center'>
          <img src={imgURL.imgURL} alt="" width={24} height={24} />
        </div>
        <div className='w-full mt-3 flex flex-col'>
          <h1 className='font-palanquin text-xl font-bold'>
          {imgURL.label}
          </h1>
          <p className='font-montserrat text-sm text-balanced mt-3'>{imgURL.subtext}</p>
        </div>
    </div>
  )
}

export default ServicesComponent