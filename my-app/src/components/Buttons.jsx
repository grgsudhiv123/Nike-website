
const Buttons = ({labels, iconurl,backgroundColor, textColor, border}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 
      font-montserrat leading-none  rounded-full 
      ${backgroundColor ? `${backgroundColor} ${textColor} ${border}` 
    : "bg-coral-red text-white"}`}>
        {labels}
        {iconurl ? 
        <img src={iconurl} alt="arrow-icon" className='ml-2 rounded-full bg-slate-500 w-5 h-5' /> 
        : null}

    </button>
  )
}

export default Buttons;